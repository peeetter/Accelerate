import React from "react";

interface Props {
  children?: React.ReactNode;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center"
    | "flex-start"
    | "flex-end";
  alignItems?: "flex-start" | "flex-end" | "center";
  onClick?: () => void;
  margin?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
  cursor?: string;
  grow?: boolean;
}

export const FlexContainer: React.FC<Props> = ({
  children,
  flexDirection = "row",
  justifyContent,
  alignItems,
  onClick,
  margin = "",
  className = "",
  cursor = "auto",
  grow = false,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection,
      justifyContent,
      alignItems,
      margin,
      cursor,
      flexGrow: grow ? 1 : 0,
    }}
    className={className}
    onClick={onClick}
  >
    {children}
  </div>
);
