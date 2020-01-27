import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { MenuList, MenuItem } from "@material-ui/core";
import NavigationBar from "../NavigationBar";

describe("components/Navigation/NavigationBar", () => {
  it("can render component", () => {
    const fakeProps = {
      className: "test-navigationMenu"
    };

    const fakeComponent = shallow(<NavigationBar {...fakeProps} />);

    expect(fakeComponent).to.have.length(1);
    expect(fakeComponent.find(MenuList)).to.have.length(1);
    expect(fakeComponent.find(MenuItem)).to.have.length(0);
  });

  it("can render menu items", () => {
    const fakeProps = {
      menuItems: [
        {
          label: "item 1"
        },
        {
          label: "item 2"
        }
      ]
    };

    const fakeComponent = shallow(<NavigationBar {...fakeProps} />);

    expect(fakeComponent.find(MenuItem)).to.have.length(2);
    expect(
      fakeComponent
        .find(MenuItem)
        .first()
        .text()
    ).to.equal("item 1");
  });
});
