import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatPage from "../components/ChatPage";
import Input from "../components/Input";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const DashBoardDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <DashBoardDiv>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <ChatPage />
          <Input />
        </>
      )}
    </DashBoardDiv>
  );
}

export default Dashboard;
