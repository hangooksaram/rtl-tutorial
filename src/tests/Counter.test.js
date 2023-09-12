import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "../components/Counter";

describe("카운터 테스트", () => {
  it("더하기", () => {
    const utils = render(<Counter />);
    const number = utils.getByText("0");
    const button = utils.queryByText("+1");

    fireEvent.click(button);

    expect(number).toHaveTextContent("1");
  });
});
