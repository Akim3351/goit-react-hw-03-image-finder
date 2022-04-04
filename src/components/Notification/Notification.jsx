import React from "react";
import css from "./Notification.module.css";

const Notification = (error) => {
  // console.log(this.props);
  // const { error } = this.props;

  return (
    <div className={css.notification__wrapper}>
      <p className={css.notification}>{error}</p>
    </div>
  );
};

export default Notification;
