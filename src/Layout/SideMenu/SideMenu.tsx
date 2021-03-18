import React from 'react';
import { jsx, css } from '@emotion/react';

// * --------------------------------------------------------------------------- style

/** @jsxRuntime classic */
/** @jsx jsx */
const style = css`
  flex-shrink: 0;
  display: flex;
  width: 50px;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #202020;
  .logo {
    width: 100%;
    height: 50px;
    background-color: royalblue;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: azure;
    margin-bottom: 8px;
  }
  .button {
    padding: 20px 0;
    color: #999999;
  }
`;

// * --------------------------------------------------------------------------- component

export default () => {
  return (
    <div css={style}>
      <div className="logo">LOGO</div>
      {['预览', '模块', '快捷'].map((item, index) => (
        <div className="button" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
