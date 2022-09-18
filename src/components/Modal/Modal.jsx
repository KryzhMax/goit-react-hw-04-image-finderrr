import { Component } from 'react';
import s from './Modal.module.css';
import ModalContent from '../ModalContent/ModalContent';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    // console.log(this.props.children);
    return (
      <div className={s.Overlay} onClick={this.closeByBackdrop}>
        <ModalContent children={this.props.children} />
      </div>
    );
  }
}

export default Modal;
