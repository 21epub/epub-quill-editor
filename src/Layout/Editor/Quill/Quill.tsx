import React from 'react';
import { useQuill } from './useQuill';
import 'quill/dist/quill.snow.css';

export default () => {
  const { quill, quillRef } = useQuill();

  // undefined > Quill Object
  console.log(quill);
  // { current: undefined } > { current: Quill Editor Reference }
  console.log(quillRef);

  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};
