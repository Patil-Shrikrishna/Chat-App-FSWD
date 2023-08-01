import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectRoute, SignInPage } from "./authentication";
import { ChatListPage, ChatPage, NewChatPage } from "./chats";

import { NavBar } from "./navigation";

export const AppRoutes = ({ user }) => {
  return (
    <Router>
      <NavBar user={user}></NavBar>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<ChatListPage />} />
          <Route path="/new-chat" element={<NewChatPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};
