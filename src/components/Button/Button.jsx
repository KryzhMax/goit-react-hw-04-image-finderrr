import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ title, onClick }) => {
  return (
    <button className={s.Button} title={title} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
