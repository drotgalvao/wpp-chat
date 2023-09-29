import React from "react";
import "./ChatPage.css";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="chatPage__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default ChatPage;
