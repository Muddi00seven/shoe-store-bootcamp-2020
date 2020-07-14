import React from "react";
import Navbar from "./Navbar";
import RightDrawer from "./SideNav";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Navbar onMenuClickHandler={() => openDrawer()} />
      <RightDrawer open={drawerOpen} onClickHandler={() => closeDrawer()} />
    </>
  );
};

export default Navigation;
