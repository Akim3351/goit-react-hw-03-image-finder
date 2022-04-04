import React from "react";
import css from "./Loader.module.css";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader__wrapper}>
      <TailSpin color="#3f51b5" height={80} width={80} />
    </div>
  );
};

export default Loader;
