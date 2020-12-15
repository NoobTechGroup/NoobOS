import styled from "styled-components";

export const ContainerBox = styled.div`
  margin: 1rem;
  width: 13rem;
  border: 0.1rem solid #575a61;
  border-radius: 0.2rem;
  background-color: #42454d;
  position: absolute;
  ${({ position }) =>
    (position === "TL" && {
      top: "0",
      left: "0",
      }) ||
    (position === "TR" && {
      top: "0",
      right: "0",
    }) ||
    (position === "BL" && {
      bottom: "0",
      left: "0",
    }) ||
    (position === "BR" && {
      bottom: "0",
      right: "0",
  })};
`;

export const NotificationStyle = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NotificationTitle = styled.h3`
  margin: 0.3rem 0.4rem 0;
  font-size: 1rem;
  color: #c0c0c0;
  max-width: 93%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextNotification = styled.p`
  margin: 0 0.4rem 0.4rem;
  font-size: 0.8rem;
  color: #01060f;
  max-width: 93%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Close = styled.button`
  color: #909090;
  outline: none;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius:50%;
  background-color: transparent;
  margin: 0.2rem;
  box-sizing: border-box;
  &:hover {
    color: #fff;
    transition: 0.3s;
    background-color: #f53333;
  }
`;