import React from 'react';
import './Modal.css';

export const Modal = ({ show, close }) => {
    return (
        <div className="modal-wrapper"
        style={{
            transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
        }}
        >
            <div className="modal-header">
                <p>NoobOS</p>
                <span onClick={close} className="close-modal-btn">✖</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>Jugem-Jugem Poop Throwing Machine Shin-chan’s Day Before Yesterday 
                        Underwear Shinpachi’s Life Balmunk Fezarion Isaac Schneider One 
                        Thirds Pure Feeling Two Thirds Worried-Over-A-Hangnail Feeling 
                        Though Betrayal Knows My Name Or Does It? I Know The Unknown 
                        The Cuttlefish Tastes Kind Of Different Than It Did Last Time 
                        Because It Was Caught Near The Pond And Served With Oil From A 
                        Hoofed Mammal, Pepepepepepepepepepepe Runny Diarrhea.</p>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Close</button>
                </div>
            </div>
            
        </div>
    )
};