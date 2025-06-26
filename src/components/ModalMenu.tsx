import React, { useEffect, useState } from 'react';

interface ModalMenuProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isClosing, onClose]);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className={`modal-slideout ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalMenu;