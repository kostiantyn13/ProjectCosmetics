import React from "react";
import { NavLink } from "react-router-dom";

function ToolbarLink({ children, ...rest }) {
  return (
    <NavLink
      className="mdc-tab"
      activeClassName="mdc-tab--active"
      activeStyle={{ color: "white", borderBottom: "3px solid white" }}
      {...rest}
    >
      {children}
    </NavLink>
  );
}
export default ToolbarLink;
/*function Toolbar(...props) {
    return (
      <NavLink className="mdc-tab" activeClassName="mdc-tab--active"
        activeStyle={{ color: "white", borderBottom: "3px solid white" }}
        {...props}>
            {props.children}
        </NavLink>
    );
  }*/
