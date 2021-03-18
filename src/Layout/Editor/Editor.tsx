import React from 'react';
import { jsx, css } from '@emotion/react';

import Quill from './Quill/Quill';

// * --------------------------------------------------------------------------- style

/** @jsxRuntime classic */
/** @jsx jsx */
const style = css`
  background-color: #eeeeee;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px dashed red;
`;

// * --------------------------------------------------------------------------- component

export default () => {
  return (
    <div css={style}>
      <Quill />
    </div>
  );
};
