import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

import IconSVG from "./IconSVG";
import "./styles.css";

const positionInitState = {
  x: 14,
  y: 10,
};

const Icon = ({ type = "txt", size, title = "noname" }) => {
  const [position, setPosition] = useState(positionInitState);
  const dragEleRef = useRef();

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

  const onChangeName = () => {
    console.log("Cambia el nombre");
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
        <span onDoubleClick={onChangeName}>{title}</span>
      </div>
    </Draggable>
  );
};

export default Icon;
