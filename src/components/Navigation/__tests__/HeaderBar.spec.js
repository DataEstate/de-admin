import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import HeaderBar from "../HeaderBar";

describe("components/Common/Navigation/HeaderBar", () => {
  const fakeProps = {
    position: "fixed",
    className: "test-HeaderBar"
  };
  it("can render component", () => {
    const fakeComponent = shallow(<HeaderBar {...fakeProps} />);
    console.log(fakeComponent.debug());
  });
});
