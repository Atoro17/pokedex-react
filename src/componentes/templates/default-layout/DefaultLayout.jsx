import React from "react";
import Navigation from "componentes/organisms/navigation/Navigation";

export const DefaultLayout = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
