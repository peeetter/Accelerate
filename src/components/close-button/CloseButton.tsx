import React from "react";
import "./CloseButton.scss";
interface Props {
  onClick: () => void;
}

export const CloseButton: React.FC<Props> = ({ onClick }) => (
  <div className="close-button" onClick={onClick}></div>
);
