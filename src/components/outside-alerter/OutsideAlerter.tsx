import React, { useRef } from "react";
import { useOutsideAlerter } from "./useOutsideAlerter";

interface Props {
  outsideClickCallback: () => void;
  children: React.ReactNode;
}
const OutsideAlerter: React.FC<Props> = ({
  outsideClickCallback,
  children,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, outsideClickCallback);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
