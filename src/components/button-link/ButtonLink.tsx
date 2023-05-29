import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import "./ButtonLink.scss";

interface ButtonLinkProps {
  to: string;
  text: string;
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ to, text }) => {
  return (
    <Link className="button-link" to={to}>
      {text}
    </Link>
  );
};

export default ButtonLink;
