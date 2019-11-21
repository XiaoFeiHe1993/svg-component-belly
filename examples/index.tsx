import React from 'react';
import BellyPosition from '../src/index';

const Demo = () => (
  <div>
    <BellyPosition onChange={e => console.log(e)} />
  </div>
);

export default Demo;
