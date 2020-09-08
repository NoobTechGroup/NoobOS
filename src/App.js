import React, {useState} from 'react';
import { Modal } from './modal/Modal';

function App() {
  const [show, setShow] = useState(false);

  const close = () => setShow(false);

  return (
    <div>
      { show ? <div onClick={close} className="back-drop"></div> : null }
      <button onClick={() => setShow(!show)} className="btn-openModal">Open Modal</button>
      <Modal show={show} close={close} />
    </div>
  );
}

export default App;
