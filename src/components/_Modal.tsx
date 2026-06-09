import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

type Props = {
  onClose: () => void;
  children: ReactNode;
};
function Modal({ children, onClose }: Props) {
  const navigate = useNavigate();
  /*function closeHandler() {
    navigate('..');
  }*/
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;
