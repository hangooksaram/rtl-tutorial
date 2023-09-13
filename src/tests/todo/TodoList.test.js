import { render, fireEvent } from "@testing-library/react";
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
    const utils = render(<TodoList {...initialProps} {...props} />);

    const first = utils.getByText(mockDatas[0].text);
    const second = utils.getByText(mockDatas[1].text);
    const removeButton = utils.getAllByText("삭제")[0];

    return {
      ...utils,
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
