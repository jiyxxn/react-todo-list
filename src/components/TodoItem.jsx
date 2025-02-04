import './TodoItem.css';
import { useTodosDispatch } from '../context/TodosContext';

const TodoItem = ({ id, isDone, content, date }) => {
  const dispatch = useTodosDispatch();

  const onClickDelete = () => {
    dispatch({
      type: 'DELETE',
      targetId: id,
    });
  };
  const onChangeCheckbox = () => {
    dispatch({
      type: 'UPDATE',
      targetId: id,
    });
  };
  return (
    <div className="TodoItem">
      <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
