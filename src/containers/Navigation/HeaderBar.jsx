// @flow

/**
 * @deprecated
 * Good experiment...
 */

import React, { useContext } from "react";
import { AppStateContext } from "src/context/AppStateContext";
import { HeaderBar as HeaderBarComponent } from "src/components";
import { toggleNavbarOpenAction } from "src/context/actions";

import { type NavigationVariantType } from "src/components/Navigation/Types/NavigationVariantType";

export type HeaderBarContainerProps = {
  position: string,
  variant: NavigationVariantType,
  navBarWidth: number,
  className: string
};

export const HeaderBar = ({
  position = "fixed",
  navBarWidth,
  className
}: HeaderBarContainerProps) => {
  const { navBarOpen, dispatch } = useContext(AppStateContext);

  const handleHeaderNavOpen = () => {
    dispatch(toggleNavbarOpenAction(!navBarOpen));
  };

  return (
    <HeaderBarComponent
      position={position}
      navBarWidth={navBarWidth}
      className={className}
      navBarOpen={navBarOpen}
      onHeaderNavToggle={handleHeaderNavOpen}
    />
  );
};

export default HeaderBar;
