import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import db from "../firebase/firebase";
import Login from "./Login";
import Avatar from "@mui/material/Avatar";
import AnimatedPage from "../animated/AnimatedPage";

const Chatdiv = styled.div`
  width: 50%;
  min-width: 450px;
  height: 70vh;
  background-color: rgba(116, 141, 166,0.8);
  margin: auto;
  border-radius: 25px;
  margin-top: 0.5rem;
  border: 5px double black;
  .notlogin {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .showlogin {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 25px;
  }
  /* ::-webkit-scrollbar-track {
    background: #dc3445;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(red, yellow);
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(#ee0970, #ff6a00);
  } */

  .chat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 1rem;
    margin-bottom: 1.5rem;
  }
  .otherchat {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  }
  .chat-div div {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    /* align-items: center; */
  }
  .chat-content {
    width: 300px;
    display: flex;
    flex-direction: column;
    word-break: break-all;
    background-color: #54BAB9;
    border-radius: 25px;
    padding-left: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .other-chat-content {
    width: 300px;
    display: flex;
    flex-direction: column;
    word-break: break-all;
    background-color: #ECE5C7;
    border-radius: 25px;
    padding-left: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .other-chat-content p:first-child {
    margin: 0;
    /* padding:0; */
    font-weight: 400;
    font-size: 12px;
    opacity: 0.5;
  }
  .other-chat-content p:nth-child(2) {
    width: 300px;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 20px;
  }
  .other-chat-content p:nth-child(3) {
    margin: 0;
    /* padding:0; */
    font-weight: 200px;
    font-size: 12px;
    opacity: 0.5;
  }
  .chat-content p:first-child {
    margin: 0;
    /* padding:0; */
    font-weight: 400;
    font-size: 12px;
    opacity: 0.5;
  }
  .chat-content p:nth-child(2) {
    width: 300px;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 20px;
    /* border: 1px solid black; */
  }
  .chat-content p:nth-child(3) {
    margin: 0;
    /* padding:0; */
    font-weight: 200px;
    font-size: 12px;
    opacity: 0.5;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
function Chat() {
  const [messagesData, setMessagesData] = useState();
  const { currentUser, play } = useContext(AppContext);
  const bottomRef = useRef(null);

  useEffect(() => {
    const collectionRef = collection(db, "messages");

    const q = query(collectionRef, orderBy("date", "asc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setMessagesData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

    return unsub;
  }, []);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messagesData]);

  return (
    <AnimatedPage>
      <Chatdiv>
        <div className={`${currentUser ? "showlogin" : "notlogin"}`}>
          {!currentUser ? (
            <Login />
          ) : (
            messagesData?.map((item) => {
              return (
                <div
                  className={`${
                    item.user === currentUser.displayName ? "chat" : "otherchat"
                  }`}
                >
                  <div className="chat-div">
                    <div>
                      <Avatar src={item.image} sx={{ width: 56, height: 56 }} />
                      <div
                        className={`${
                          item.user === currentUser.displayName
                            ? "chat-content"
                            : "other-chat-content"
                        }`}
                      >
                        <p>{item.user}</p>
                        <p>{item.text}</p>
                        <p
                          style={{ display: "flex", alignItems: "center" }}
                        >{`${new Date(item.date?.seconds * 1000).getDate()}.${
                          new Date(item.date?.seconds * 1000).getMonth() + 1
                        }.${new Date(
                          item.date?.seconds * 1000
                        ).getFullYear()}  /  ${new Date(
                          item.date?.seconds * 1000
                        ).getHours()}:${new Date(
                          item.date?.seconds * 1000
                        ).getMinutes()}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          <div ref={bottomRef} />
        </div>
      </Chatdiv>
    </AnimatedPage>
  );
}

export default Chat;
