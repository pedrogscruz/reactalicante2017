import * as React from 'react';
import { createRenderer } from './RenderField';

const renderInput = createRenderer((props) => {
  const { input, label } = props;
  return <input {...input} placeholder={label} />
});

export default renderInput;