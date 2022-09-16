import { FallingLines } from 'react-loader-spinner';
import s from './Loader.module.css';

import React from 'react';

const Loader = () => {
  return (
    <div className={s.Loader}>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};

export default Loader;
