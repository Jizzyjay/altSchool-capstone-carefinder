import React from "react";
import { Circles } from "react-loader-spinner";

const loadingAnimation = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#08299B"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default loadingAnimation;
