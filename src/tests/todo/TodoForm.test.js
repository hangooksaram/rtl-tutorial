import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoForm from "../../components/todo/TodoForm";

describe("todo form", () => {
  const inputText = "TDD 배우기";

  const elements = (props) => {
    const { getByText, getByPlaceholderText } = render(<TodoForm {...props} />);

    const input = getByPlaceholderText("할 일을 입력하세요");
    const button = getByText("등록");

    return { input, button };
  };

  it("ui 테스트", () => {
    const { input, button } = elements();

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("input 입력 테스트", () => {
    const { input, button } = elements();
    fireEvent.change(input, {
      target: {
        value: inputText,
      },
    });
    expect(input).toHaveAttribute("value", inputText);
  });

  it("onInsert 함수 props 로 넘기기", () => {
    const onInsert = jest.fn();
    const { input, button } = elements({ onInsert });

    fireEvent.change(input, {
      target: {
        value: inputText,
      },
    });

    fireEvent.click(button);
    expect(onInsert).toBeCalledWith(inputText);
    expect(input).toHaveAttribute("value", "");
  });
});
