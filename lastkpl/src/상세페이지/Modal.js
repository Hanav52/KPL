import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { apiKey } from '../API';

export default function Modal({setContent}) {
  const editorRef = useRef(null);

  // 제목, 태그, 내용, 이미지
  const log = (e) => {
    setContent(e.level.content);
  }

  return (
    <>
      <Editor
        apiKey={apiKey}
        onChange={log}
        init={{
          placeholder: "글 작성시 위에있는 태그 포함과 Enter를 쳐주세요",
          forced_root_block : false,
          force_br_newlines : true,
          force_p_newlines : false,
          deprecation_warnings: false,
          width: 500,
          height: 500,
          menubar: false,
          toolbar: 'undo redo | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}