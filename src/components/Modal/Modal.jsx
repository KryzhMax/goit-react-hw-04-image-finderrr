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
      this.props.onClick();
    }
  };

  closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    // console.log(this.props.children);
    return (
      <div className={s.Overlay} onClose={this.closeByBackdrop}>
        <ModalContent children={this.props.children} />
        {/* <div className={s.Modal}>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
          <button className={s.close} onClick={this.props.toggleModal}>
            Close
          </button>
        </div> */}
      </div>
    );
  }
}

export default Modal;
