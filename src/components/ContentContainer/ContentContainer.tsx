import React, { FunctionComponent } from "react";
import "./ContentContainer.scss";
interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  children,
  className = "",
  id = "",
}) => (
  <div
    id={id}
    className={`content-container${!className ? "" : ` ${className}`}`}
  >
    {children}
  </div>
);

export default ContentContainer;
