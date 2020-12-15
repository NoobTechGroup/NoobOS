// Dependencies
import React from "react";
// import IconImg from "assets/Icons/svgsample.svg";

// Components


// Styles
import {
  ContainerBox,
  NotificationStyle,
  NotificationTitle,
  TextNotification,
  Close
} from "./styles";


const Notification = props => {
  const { title, text, position } = props;

  return (
    <ContainerBox position={position} >
      <NotificationStyle>
        <NotificationTitle>
          {title}
        </NotificationTitle>
        <Close>✖</Close>
      </NotificationStyle>
      <TextNotification>
        {text}
      </TextNotification>
    </ContainerBox>
  );
};

export default Notification;
