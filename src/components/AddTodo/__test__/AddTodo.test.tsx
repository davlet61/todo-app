import { render, fireEvent, screen } from '../../../utils/test-utils';
import AddTodo from '..';

describe('AddTodo', () => {
  test('should render input element', () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(/task title.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('should be able to type into input', () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(
      /task title.../i,
    ) as HTMLInputElement;
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: 'Redux w/Typescript' },
    });
    expect(inputElement.value).toBe('Redux w/Typescript');
  });

  test('should be able to add and item with a button click', () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(
      /task title.../i,
    ) as HTMLInputElement;
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: 'Redux w/Typescript' },
    });
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.click(buttonElement);
    expect(inputElement).toBeInTheDocument();
  });

  test('should have empty input when add button is cliked', () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(
      /task title.../i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'Redux w/Typescript with react' },
    });
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });

  test('should not be able to add a task without a title', () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(
      /short description of the task/i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'Description of some task' },
    });
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });

  test('should add a task with a title and a description', () => {
    render(<AddTodo />);
    const titileInput = screen.getByPlaceholderText(
      /task title.../i,
    ) as HTMLInputElement;
    const descriptionInput = screen.getByPlaceholderText(
      /short description of the task/i,
    ) as HTMLInputElement;
    fireEvent.change(titileInput, {
      target: { value: 'Some important task' },
    });
    fireEvent.change(descriptionInput, {
      target: { value: 'Description of some task' },
    });
    const buttonElement = screen.getByRole('button', { name: /add/i });
    fireEvent.click(buttonElement);
    expect(titileInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });
});
