import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCetVd8a4tnYYR1zD6TkWumHQR7sFtj5wI",
  authDomain: "altschool-capstone-3e9a4.firebaseapp.com",
  projectId: "altschool-capstone-3e9a4",
  storageBucket: "altschool-capstone-3e9a4.appspot.com",
  messagingSenderId: "119665579816",
  appId: "1:119665579816:web:ee659f5820c8be77ba221d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface HospitalData extends DocumentData {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  city: string;
  state: string;
  description: string;
}

// Fetch hospitals from Firestore
export const fetchHospitalsFromFirestore = async (): Promise<
  HospitalData[]
> => {
  try {
    const hospitalsCollection = collection(db, "hospital");
    const querySnapshot: QuerySnapshot = await getDocs(hospitalsCollection);

    let hospitalsData: HospitalData[] = [];
    querySnapshot.forEach((doc) => {
      hospitalsData.push({ id: doc.id, ...doc.data() } as HospitalData);
    });

    // Listen for real-time changes in the Firestore collection
    onSnapshot(hospitalsCollection, (snapshot) => {
      const updatedHospitalsData: HospitalData[] = [];
      snapshot.forEach((doc) => {
        updatedHospitalsData.push({
          id: doc.id,
          ...doc.data(),
        } as HospitalData);
      });
      hospitalsData = updatedHospitalsData;
    });

    return hospitalsData;
  } catch (error) {
    throw new Error("Failed to fetch hospitals from Firestore.");
  }
};

// Add a new hospital to Firestore
export const addHospitalToFirestore = async (
  hospitalData: Record<string, string>
): Promise<void> => {
  try {
    const hospitalsCollection = collection(db, "hospital");

    await addDoc(hospitalsCollection, {
      name: hospitalData.name,
      address: hospitalData.address,
      phoneNumber: hospitalData.phoneNumber,
      createdAt: new Date(),
      city: hospitalData.city,
      state: hospitalData.state,
      description: hospitalData.description,
    });
  } catch (error) {
    throw new Error("Failed to add hospital to Firestore.");
  }
};

// Update a hospital in Firestore
export const updateHospitalInFirestore = async (
  id: string,
  updates: Partial<Hospital>
) => {
  const hospitalRef = doc(db, "hospitals", id);
  await updateDoc(hospitalRef, updates);
};

// Delete a hospital from Firestore
export const deleteHospitalFromFirestore = async (hospitalId: string) => {
  try {
    const hospitalRef = doc(db, "hospital", hospitalId);
    await deleteDoc(hospitalRef);
  } catch (error) {
    throw new Error("Failed to delete hospital from Firestore.");
  }
};

export default app;
