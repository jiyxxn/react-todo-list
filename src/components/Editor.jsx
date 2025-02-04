import { useContext, useRef, useState } from 'react';
import './Editor.css';
import { TodosDispatchContext } from '../context/TodosContext';

const Editor = () => {
  const dispatch = useContext(TodosDispatchContext);
  const idRef = useRef(2);

  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }

    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });

    setContent('');
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        type="text"
        placeholder="새로운 Todo"
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
