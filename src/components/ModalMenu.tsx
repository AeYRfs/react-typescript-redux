import React, { useEffect, useState } from 'react';

interface ModalMenuProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ onClose, children }) => {
  const [isClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isClosing, onClose]);

  return (
    <div
      className={`modal-slideout ${isClosing ? 'closing' : ''}`}
    >
      {children}
    </div>
  );
};

export default ModalMenu;