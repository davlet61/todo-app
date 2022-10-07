import { useAppDispatch, useAppSelector } from '../../redux/hooks/typedHooks';
import { show } from '../../redux/slice/visibilitySlice';
import { FaBroom } from 'react-icons/fa';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import CustomPopup from '../Popup';

const Todo = () => {
  const { todos } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="container__title">Things I have to do...</h1>
      <AddTodo />
      <TodoList />
      <CustomPopup>
        <h2>Are you sure you want to delete the list?</h2>
        <h1>THIS ACTION IS IRREVERSIBLE!</h1>
      </CustomPopup>
      <button
        className="button"
        disabled={todos.length === 0 ? true : false}
        onClick={() => dispatch(show())}
      >
        <FaBroom className="button__icon button__icon--color" />
        <p className="button__text">Clear list</p>
      </button>
    </>
  );
};

export default Todo;
