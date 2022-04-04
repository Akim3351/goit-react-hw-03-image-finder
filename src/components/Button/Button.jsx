import React from "react";
import css from "./Button.module.css";
import propTypes from "prop-types";

const Button = ({ onLoadMore }) => {
  return (
    <div className={css.button__wrapper}>
      <button className={css.button} type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: propTypes.func.isRequired,
};

export default Button;
