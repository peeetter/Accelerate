import scrollTo from "gatsby-plugin-smoothscroll";
import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import Logo from "../../images/Accelerate_logo.svg";
import { FlexContainer } from "../FlexContainer/FlexContainer";

import "./Header.scss";

export const Header = () => {
  const windowSize = useWindowSize();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  const menu = [
    { name: "Så fungerar det", id: "#process-section-anchor" },
    { name: "Varför Accelerate", id: "#usp-section-anchor" },
    { name: "Team", id: "#aboutus-section-anchor" },
    { name: "Om oss", id: "#how-we-work-anchor" },
  ];

  const menuItems = menu.map((val, index) => (
    <MenuItem
      key={index}
      delay={`${index * 0.05}s`}
      onClick={handleLinkClick}
      id={val.id}
    >
      {val.name}
    </MenuItem>
  ));

  return (
    <div className="main-header">
      <div className="main-header-content">
        <img alt="Accelerate logo" className="logo" src={Logo} />
        {windowSize.width < 1000 ? (
          <MenuButton
            open={menuOpen}
            onClick={handleMenuClick}
            color={menuOpen ? "white" : "black"}
            isMobile={windowSize.width < 769}
          />
        ) : (
          <FlexContainer alignItems="center">
            {menu.map((item) => (
              <span
                key={item.id}
                className="menu-item-desktop"
                onClick={() => scrollTo(item.id)}
              >
                {item.name}
              </span>
            ))}
          </FlexContainer>
        )}
        <Menu open={menuOpen}>{menuItems}</Menu>
      </div>
    </div>
  );
};

interface MenuProps {
  open: boolean;
  children: React.ReactNode;
}
const Menu: React.FC<MenuProps> = ({ open, children }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      height: open ? "100%" : 0,
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      background: "black",
      opacity: 0.95,
      color: "#fafafa",
      transition: "height 0.3s ease",
      zIndex: 2,
    }}
  >
    {open && (
      <div
        style={{
          paddingTop: "3rem",
        }}
      >
        {children}
      </div>
    )}
  </div>
);

interface MenuItemProps {
  delay: any;
  children: React.ReactNode;
  onClick: (id: string) => void;
  id: string;
}
const MenuItem: React.FC<MenuItemProps> = ({
  delay,
  children,
  onClick,
  id,
}) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover((prev) => !prev);

  return (
    <div
      style={{
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: delay,
      }}
    >
      <div
        style={{
          fontSize: "1.2rem",
          padding: "1rem 0",
          margin: "0 5%",
          cursor: "pointer",
          color: hover ? "gray" : "#fafafa",
          transition: "color 0.2s ease-in-out",
          animation: "0.5s slideIn forwards",
          animationDelay: delay,
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={() => onClick(id)}
      >
        {children}
      </div>
      <div
        style={{
          width: "90%",
          height: "1px",
          background: "gray",
          margin: "0 auto",
          animation: "0.5s shrink forwards",
          animationDelay: delay,
        }}
      />
    </div>
  );
};

interface MenuButtonProps {
  open: boolean;
  color: string;
  onClick: () => void;
  isMobile: boolean;
}
const MenuButton: React.FC<MenuButtonProps> = ({ open, onClick }) => {
  console.log({ open });

  let cl1 = "menu-button-line";
  let cl2 = "menu-button-line";
  let cl3 = "menu-button-line";

  if (open) {
    cl1 += " menu-button-line-top-open";
    cl2 += " menu-button-line-middle-open";
    cl3 += " menu-button-line-bottom-open";
  } else {
    cl1 += " menu-button-line-top-closed";
    cl2 += " menu-button-line-middle-closed";
    cl3 += " menu-button-line-bottom-closed";
  }

  return (
    <div className="menu-button-container" onClick={onClick}>
      <div className={cl1} />
      <div className={cl2} />
      <div className={cl3} />
    </div>
  );
};
