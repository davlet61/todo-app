import { FaTrashAlt } from 'react-icons/fa';
import { useAppDispatch } from '../../redux/hooks/typedHooks';
import { markComplete, deleteTodo } from '../../redux/slice/todosSlice';
import { Task, HandleDelAndStatusFn } from '../../types';
import './style.css';

const TodoItem = ({ todo }: { todo: Task }) => {
  const dispatch = useAppDispatch();

  const handleCompleted: HandleDelAndStatusFn = id => {
    dispatch(markComplete(id));
  };

  const handleDelete: HandleDelAndStatusFn = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <article
      data-testid="toggleComplete"
      className={`todo todo--toggle-completed ${
        todo.completed ? 'todo--completed' : ''
      }`}
      onClick={e => handleCompleted(todo.id)}
    >
      <button
        onClick={e => {
          e.stopPropagation();
          handleDelete(todo.id);
        }}
        className="todo__button--remove"
        data-testid="removeBtn"
      >
        <FaTrashAlt className="button__icon" />
      </button>
      <h3 className="todo__title">{todo.title}</h3>
      <p className="todo__desc">{todo.description}</p>
    </article>
  );
};

export default TodoItem;
