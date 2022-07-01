import React, { useContext } from "react";
import styled from "styled-components";
import { logOut } from "../cloud/Auth";
import Logo from "../assets/logo.jpg";
import Avatar from "@mui/material/Avatar";
import AppContext from "../context/AppContext";
import Button from "@mui/material/Button";
import { AnimatedNavbar } from "../animated/AnimatedPage";

const NavbarDiv = styled.div`
  width: 50%;
  min-width: 450px;
  height: 10vh;
  background-color: rgb(104, 167, 173, 0.5);
  margin: auto;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

function Navbar() {
  const { currentUser } = useContext(AppContext);
  return (
    <AnimatedNavbar>
      <NavbarDiv>
        <Avatar alt="Remy Sharp" src={Logo} sx={{ width: 56, height: 56 }} />
        <h3>{currentUser.displayName}</h3>
        {currentUser && (
          <Button variant="outlined" onClick={logOut} color="error">
            Log Out
          </Button>
        )}
      </NavbarDiv>
    </AnimatedNavbar>
  );
}

export default Navbar;
