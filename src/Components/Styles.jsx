import styled from "styled-components";

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: normal;
  word-spacing: normal;
  font-size: 25 px;
  padding: 10 px 60 px;
  border-style: solid;
  box sizing ${({ status }) => `var(--${status})`};
  ${({ type, size }) =>
  (type === "normal" && {
    borderRadius: "2 px",
    width: (size === "medium" && "50 px"),
    height: (size === "medium" && "20 px"),
    fontSize: (size === "medium" && "12 px"),
  }) 
  
  (type === "fullWidth" && {
    borderRadius: "20 px",
    width: (size === "large" && "500 px"),
    height: (size === "medium" && "20 px"),
    fontSize: (size === "medium" && "12 px"),
  }) 
  
  (type === "roundwithText" && {
    borderRadius: "50%",
    width: (size === "small" && "20 px"),
    height: (size === "small" && "10 px"),
  }) 
  
  (type === "roundWithIcon" && {
    borderRadius: "50%",
    width: (size === "small" && "20 px"),
    height: (size === "small" && "10 px")
  })}
`;
