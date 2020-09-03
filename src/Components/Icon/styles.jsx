import styled from 'styled-components'

export const StyledWrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  ${({ selected }) =>
    selected && {
      borderRadius: "15px",
      border: "2px solid #282c34",
    }}
`;

export const StyledHandleIcon = styled.div``

export const StyledLabelIcon = styled.span`
    font-size: 1rem;
    cursor: default;
`