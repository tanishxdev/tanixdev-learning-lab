import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    const root = document.getElementById("modal-root");
    setPortalRoot(root);
  }, []);

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px"
      }}>
        <h2>Portal Modal</h2>
        <p>This modal is rendered outside the root div.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    portalRoot
  );
}

export default Modal;
