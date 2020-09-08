import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import IconSVG from "./IconSVG";
import { DEFAULT_DESKTOP_SIZE} from './constants';

import useClickoutside from "hooks/useClickoutside";

import {StyledHandleIcon, StyledLabelIcon, StyledWrapperIcon} from './styles'

import "./styles.css";

/**
 * 
 * TODO: Wait for Input Component
 * 
 */

const positionInitState = {
  x: 14,
  y: 10,
};

const Icon = ({
  type = "txt",
  size = DEFAULT_DESKTOP_SIZE,
  title = "noname",
}) => {
  const [position, setPosition] = useState(positionInitState);
  const [toggleChangeName, setToggleChangeName] = useState(false);
  const [iconName, setIconName] = useState(title);
  const [selected, setSelected] = useState(false);
  const dragEleRef = useRef();

  useClickoutside(dragEleRef, () => {
    quitEditName(false);
    setSelected(false);
  });

  const onDrag = (e, position) => {
    const { x, y } = position;
  };

  const onDoubleClick = () => {
    // TODO: Check what kind of type is in order to know what to execute
    console.log("doble click");
  };

  const onStop = (e, position) => {
    setPosition(position);
  };

  const handleInputChange = (e) => {
    let name = e.target.value;
    setIconName(name);
  };

  const quitEditName = () => {
    if (iconName !== "") {
      setToggleChangeName(false);
    }
  };

  const onChangeName = (e) => {
    if (e.key === "Enter") quitEditName();
  };

  return (
    <Draggable
      onMouseDown={(e) => e.stopPropagation()}
      position={position}
      onDrag={onDrag}
      onStop={onStop}
      nodeRef={dragEleRef}
      bounds="parent"
      defaultClassName="dragIcon"
      handle=".handle"
    >
      <StyledWrapperIcon ref={dragEleRef} onClick={() => setSelected(true)} selected={selected}>
        <StyledHandleIcon className="handle" onDoubleClick={onDoubleClick}>
          <IconSVG name={type} size={size} />
        </StyledHandleIcon>
        {toggleChangeName ? (
          <input
            value={iconName}
            onChange={handleInputChange}
            onKeyPress={onChangeName}
            autoFocus
          />
        ) : (
          <StyledLabelIcon onDoubleClick={setToggleChangeName}>
            {iconName}
          </StyledLabelIcon>
        )}
      </StyledWrapperIcon>
    </Draggable>
  );
};

export default Icon;
