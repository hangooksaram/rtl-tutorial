import React from "react";
import { render } from "@testing-library/react";
import Profile from "../components/Profile";

describe("프로필 테스트", () => {
  //   it("스냅샷 찍어두기?", () => {
  //     const utils = render(<Profile username="hj" name="오현재1u" />);
  //     expect(utils.container).toMatchSnapshot();
  //   });

  it("이전 렌더링과 확인", () => {
    const utils = render(<Profile username="hj" name="오현재1" />);
    utils.getByText("오현재1");
  });
});
