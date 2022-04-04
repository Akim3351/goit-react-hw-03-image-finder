import React, { Component } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscPress);
  }

  onEscPress = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.onBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.link} alt="img" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  link: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};

export default Modal;
