import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TodoItem from "../../components/todo/TodoItem";

describe("todo item 테스트", () => {
  const mockData = {
    id: 1,
    text: "TDD 배우기",
    done: false,
  };

  const initialProps = {
    todo: mockData,
  };
  const elements = (props = {}) => {
    render(<TodoItem {...initialProps} {...props} />);

    const todo = props.todo || initialProps.todo;

    const span = screen.getByText(todo.text);
    const button = screen.getByText("삭제");
    return {
      span,
      button,
    };
  };
  it("ui 테스트", () => {
    const { span, button } = elements();

    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("done 이 True 일 때 ui 변경", () => {
    const { span } = elements({ todo: { ...mockData, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through");
  });

  it("done 이 False 일 때 ui 변경", () => {
    const { span } = elements({ todo: { ...mockData, done: false } });
    expect(span).not.toHaveStyle("text-decoration:line-through");
  });

  it("done toggle to true", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { span, button } = elements({ onToggle, onRemove });

    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(mockData.id);
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(mockData.id);
  });
});
