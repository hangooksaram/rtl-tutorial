import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
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
    const utils = render(<TodoItem {...initialProps} {...props} />);

    const { getByText } = utils;
    const todo = props.todo || initialProps.todo;

    const span = getByText(todo.text);
    const button = getByText("삭제");
    return {
      ...utils,
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
    console.log(expect(span));
    expect(span).toHaveStyle("text-decoration: line-through");
  });

  //   it("done 이 False 일 때 ui 변경", () => {
  //     const { span } = elements({ todo: { ...mockData, done: false } });
  //     expect(span).not.toHaveStyle("text-decoration:line-through");
  //   });

  //   it("done toggle to true", () => {
  //     const onToggle = jest.fn();
  //     const onRemove = jest.fn();
  //     const { span, button } = elements({ onToggle, onRemove });

  //     fireEvent.click(span);
  //     expect(onToggle).toBeCalledWith(mockData.id);
  //     fireEvent.click(button);
  //     expect(onRemove).toBeCalledWith(mockData.id);
  //   });
});
