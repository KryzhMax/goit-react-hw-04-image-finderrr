import { useCallback, useEffect } from 'react';
import s from './Modal.module.css';
import ModalContent from '../ModalContent/ModalContent';

const Modal = ({ onClose, children }) => {
  const closeByEsc = useCallback(
    ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeByEsc]);

  const closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={closeByBackdrop}>
      <ModalContent children={children} />
    </div>
  );
};

export default Modal;
