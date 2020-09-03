import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import useClickoutside from "hooks/useClickoutside";

import IconSVG from "./IconSVG";
import "./styles.css";

const positionInitState = {
  x: 14,
  y: 10,
};

const Icon = ({ type = "folder", size, title = "noname" }) => {
  const [position, setPosition] = useState(positionInitState);
  const [toggleChangeName, setToggleChangeName] = useState(false);
  const [iconName, setIconName] = useState(title);
  const dragEleRef = useRef();

  useClickoutside(dragEleRef, () => setToggleChangeName(false));

  const onDrag = (e, position) => {
    const { x, y } = position;
    console.log("drag", x, y);
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

  const onChangeName = (e) => {
    if (e.key === "Enter") setToggleChangeName(false);
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
      <div ref={dragEleRef}>
        <div className="handle" onDoubleClick={onDoubleClick}>
          <IconSVG name={type} {...size} />
        </div>
        {toggleChangeName ? (
          <input
            value={iconName}
            onChange={handleInputChange}
            onKeyPress={onChangeName}
          />
        ) : (
          <span onDoubleClick={setToggleChangeName}>{iconName}</span>
        )}
      </div>
    </Draggable>
  );
};

export default Icon;
