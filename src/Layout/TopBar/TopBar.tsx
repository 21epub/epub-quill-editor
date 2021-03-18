import React from 'react';
import { jsx, css } from '@emotion/react';

// * --------------------------------------------------------------------------- style

/** @jsxRuntime classic */
/** @jsx jsx */
const style = css`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 24px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

// * --------------------------------------------------------------------------- component

export default () => {
  return (
    <div css={style}>
      <span>教员指导手册 PIT 05</span>
    </div>
  );
};
