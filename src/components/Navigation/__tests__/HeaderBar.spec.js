import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { IconButton } from "@material-ui/core";
import HeaderBar from "../HeaderBar";

describe("components/Common/Navigation/HeaderBar", () => {
  it("can render component", () => {
    const fakeProps = {
      position: "fixed",
      className: "test-HeaderBar"
    };

    const fakeComponent = shallow(<HeaderBar {...fakeProps} />);

    expect(fakeComponent).to.have.length(1);
    expect(fakeComponent.prop("position")).to.equal(fakeProps.position);
    expect(fakeComponent.hasClass(fakeProps.className)).to.equal(true);
  });

  it("can toggle header event", () => {
    let mockClicked = false;
    const mockToggleHandler = jest.fn(e => {
      mockClicked = true;
    });
    const fakeComponent = shallow(
      <HeaderBar onHeaderNavToggle={mockToggleHandler} />
    );
    expect(fakeComponent.find(IconButton)).to.have.length(1);
    fakeComponent.find(IconButton).simulate("click");
    expect(mockClicked).to.equal(true);
  });
});
