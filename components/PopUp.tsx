// Popup.js
import { ReactNode, useEffect, useRef } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center ">
          <div className="fixed inset-0 bg-black opacity-50 blur-sm z-50" />
          <div
            ref={popupRef}
            className="bg-white p-12 rounded-2xl shadow-md relative z-50 border border-[3px]"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
