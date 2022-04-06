import React from "react";
import css from "./Notification.module.css";

const Notification = ({ error }) => {
  const notificationText = `Opps!! Произошла ошибка при выполнении запроса, а именно: "${error}". Попробуйте еще раз или обратитесь к администратору за помощью.`;
  return (
    <div className={css.notification__wrapper}>
      <p className={css.notification}>{notificationText}</p>
    </div>
  );
};

export default Notification;
