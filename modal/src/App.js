import React, {useState} from 'react';
import { Modal } from './components/modal/Modal';

function App() {
  const [show, setShow] = useState(false);

  const close = () => setShow(false);

  return (
    <div>
      { show ? <div onClick={close} className="back-drop"></div> : null }
      <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
      <Modal show={show} close={close} />
    </div>
  );
}

export default App;
