import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import { writeToData } from "../firebase/firebase";
import { GrSend } from "react-icons/gr";
import { successMessage } from "../helper/toast";
import { AnimatedInput } from "../animated/AnimatedPage";

const InputDiv = styled.div`
  width: 50%;
  min-width: 450px;
  height: 10vh;
  min-height: 75.75px;
  background-color: rgb(104, 167, 173, 0.5);
  margin: auto;
  margin-top: 1rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

function Input() {
  const { currentUser } = useContext(AppContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      writeToData(text, currentUser.displayName, currentUser.photoURL);
      successMessage("Mesaj Eklendi");
    }

    setText("");
  };

  return (
    <AnimatedInput>
      <InputDiv>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            value={text}
            onChange={handleChange}
            disabled={currentUser ? false : true}
            sx={{width:"40vw"}}
          />
          {currentUser && (
            <Button variant="contained" endIcon={<GrSend />} type="submit">
              Send
            </Button>
          )}
        </form>
      </InputDiv>
    </AnimatedInput>
  );
}

export default Input;
