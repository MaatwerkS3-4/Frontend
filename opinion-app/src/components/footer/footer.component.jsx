import React, { useContext } from "react";
import "./footer.styles.css";
import { Context } from "../wrapper/wrapper";
export const Footer = ({}) => {
  const context = useContext(Context);
  return (
    <footer>
      <select value={context.locale} onChange={context.selectLang}>
        <option value="nl"> Nederlands</option>
        <option value="en-US"> English </option>
      </select>
    </footer>
  );
};
