import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!</p>
      <p>Hi!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons onClick={onClick} />
    </div>
  );
}

Page.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};