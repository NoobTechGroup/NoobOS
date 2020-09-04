import styled from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  justify-content: flex-end;

  /* display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  width:100%;
  top: calc(100% - 20vh) */

  /* display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  width:100%;
  top: calc(100% - 20vh) */
`;

export const NotificationStyle = styled.div`
  margin: 1rem;
  background-color: #2c2c2c;
  border: 0.1rem solid #c3c3c3;
  border-radius: 0.2rem;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NotificationTitle = styled.h3`
  margin: 0.3rem 0.4rem 0;
  /* padding-left: 0.5rem; */
  font-size: 1rem;
  color: #c0c0c0;
`;

export const TextNotification = styled.p`
  margin: 0.4rem;
  /* padding-left: 0.5rem; */
  font-size: 0.8rem;
  color: #23c1c1;
`;

export const Button = styled.button`
  margin: 0.3rem;
  background-color: #5c5c5c;
  border: none;
  border-radius: 1rem;
  width: 1rem;
  height: 1rem;
  font-size:0.5rem;
  font-weight: bold;
`;