import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoApp from "../../components/todo/TodoApp";

describe("to do app", () => {
  const elements = () => {
    const utils = render(<TodoApp />);
    const { getByText, getByTestId } = utils;
    const todoForm = getByText("등록");
    const todoList = getByTestId("TodoList");

    return {
      ...utils,
      todoForm,
      todoList,
    };
  };
  it("ui 테스트", () => {
    const { todoForm, todoList } = elements();

    expect(todoForm).toBeTruthy();
    expect(todoList).toBeTruthy();
  });

  it("리스트 테스트", () => {
    const { getByText } = elements();
    getByText("TDD 배우기");
  });

  it("새 항목 추가 테스트", () => {
    const { getByPlaceholderText, getByText } = elements();
    // 이벤트를 발생시켜서 새 항목을 추가하면
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(getByText("등록"));
    // 해당 항목이 보여져야합니다.
    getByText("새 항목 추가하기");
  });

  it("토글 기능 테스트", () => {
    const { getByText } = elements();
    const todoText = getByText("TDD 배우기");
    expect(todoText).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
  });

  it("삭제 기능 테스트", () => {
    const { getByText } = elements();
    const textContent = getByText("TDD 배우기");
    fireEvent.click(textContent.nextSibling);

    expect(textContent).not.toBeInTheDocument();
  });
});
