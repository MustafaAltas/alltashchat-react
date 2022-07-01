import React from "react";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import { forLogin } from "../cloud/Auth";
import { AnimatedNavbar } from "../animated/AnimatedPage";

function Login() {
  return (
    <AnimatedNavbar>
      <div>
        <Button variant="contained" startIcon={<FcGoogle />} onClick={forLogin}>
          Log in with Google
        </Button>
      </div>
    </AnimatedNavbar>
  );
}

export default Login;
