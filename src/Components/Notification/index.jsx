// Dependencies
import React from "react";

// Components


// Styles
import {
  ContainerBox,
  NotificationStyle,
  NotificationTitle,
  TextNotification,
  Button
} from "./styles";

const Notification = props => {
  const { title, text, position } = props;

  return (
    <ContainerBox className={`container-box ${position}`}>
      <NotificationStyle className={`notification-style ${position}`}>
        <div>
          <NotificationTitle className="notification-title">
            {title}
          </NotificationTitle>
          <TextNotification className="notification-msg">
            {text}
          </TextNotification>
        </div>
        <Button className="button">
          x
        </Button>
      </NotificationStyle>
    </ContainerBox>
  );
};

export default Notification;
