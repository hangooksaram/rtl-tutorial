import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TodoList from "../../components/todo/TodoList";

describe("todo list 테스트", () => {
  const mockDatas = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  const initialProps = {
    todos: mockDatas,
  };

  const elements = (props) => {
    render(<TodoList {...initialProps} {...props} />);

    const first = screen.getByText(mockDatas[0].text);
    const second = screen.getByText(mockDatas[1].text);
    const removeButton = screen.getAllByText("삭제")[0];

    return {
      first,
      second,
      removeButton,
    };
  };

  it("ui 테스트", () => {
    const { first, second } = elements();
    expect(first).toBeTruthy();
    expect(second).toBeTruthy();
  });

  it("onToggle, onRemove props 테스트", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();

    const { first, removeButton } = elements({ onToggle, onRemove });

    fireEvent.click(first);
    expect(onToggle).toBeCalledWith(mockDatas[0].id);
    fireEvent.click(removeButton);
    expect(onRemove).toBeCalledWith(mockDatas[0].id);
  });
});
