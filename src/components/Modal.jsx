// Modal.js
function Modal({ onClose, children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="button-54" onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
  );
}

export default Modal;
