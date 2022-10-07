import { render, fireEvent, screen } from '../../../utils/test-utils';
import Todo from '../Todo';
import { mockLocalStorage } from '../../../setupTests';
import { Task } from '../../../Types/Types';

mockLocalStorage();

const addTask = (tasks: Task[]) => {
  const inputElement = screen.getByPlaceholderText(/task title.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task.title } });
    fireEvent.click(buttonElement);
  });
};

test('should be able to type into input', () => {
  render(<Todo />);
  addTask([{ id: '1', title: 'learn typescript with react' }]);
  const divElement = screen.getByText(/learn typescript with react/i);
  expect(divElement).toBeInTheDocument();
});

test('should render multiple items', () => {
  render(<Todo />);
  addTask([
    { id: '1', title: 'learn typescript with react' },
    { id: '2', title: 'learn typescript with react' },
    { id: '3', title: 'learn typescript with react' },
  ]);
  const divElements = screen.queryAllByText(/learn typescript with react/i);
  expect(divElements.length).toBe(3);
});

test('task should not have complete class when initally rendered', () => {
  render(<Todo />);
  addTask([{ id: '1', title: 'learn typescript with react' }]);
  const divElement = screen.getByText(/learn typescript with react/i);
  expect(divElement).not.toHaveClass('todo--completed');
});

test('task should have "todo--completed" class when clicked', () => {
  render(<Todo />);
  addTask([{ id: '1', title: 'learn typescript with react' }]);
  const divElement = screen.getByTestId('toggleComplete');

  fireEvent.click(divElement);
  expect(divElement).toHaveClass('todo--completed');
});

test('task should be removed from list when clicked', () => {
  render(<Todo />);
  addTask([{ id: '1', title: 'learn typescript with react' }]);
  const divElement = screen.getByText(/learn typescript with react/i);
  const buttonElement = screen.getByTestId('removeBtn');

  fireEvent.click(buttonElement);
  expect(divElement).not.toBeInTheDocument();
});
