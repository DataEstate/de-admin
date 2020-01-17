// @flow

/**
 * @deprecated
 * Good expriment, but overkill
 */
import React, { useContext } from "react";
import { AppStateContext } from "src/context/AppStateContext";
import { NavigationBar as NavigationBarComponent } from "src/components";
import { toggleNavbarOpenAction } from "src/context/actions";

import { type NavigationVariantType } from "src/components/Navigation/Types/NavigationVariantType";

export type Props = {
  className?: string,
  variant: NavigationVariantType,
  navBarWidth: number
};

export const NavigationBar = ({
  className,
  variant = "persistent",
  navBarWidth
}: Props) => {
  const { navBarOpen, dispatch } = useContext(AppStateContext);

  const handleNavbarToggle = () => {
    dispatch(toggleNavbarOpenAction(!navBarOpen));
  };

  return (
    <NavigationBarComponent
      className={className}
      variant={variant}
      navBarWidth={navBarWidth}
      open={navBarOpen}
      onNavBarToggle={handleNavbarToggle}
    />
  );
};

export default NavigationBar;
