import React from 'react';
import { jsx, css } from '@emotion/react';
import Editor from './Editor/Editor';
import SideMenu from './SideMenu/SideMenu';
import TopBar from './TopBar/TopBar';

// * --------------------------------------------------------------------------- style

/** @jsxRuntime classic */
/** @jsx jsx */
const style = css`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

// * --------------------------------------------------------------------------- component

export const Layout = () => {
  return (
    <div css={style}>
      <SideMenu />
      <div className="main">
        <TopBar />
        <Editor />
      </div>
    </div>
  );
};
