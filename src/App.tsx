import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './features/auth/SignUp';
import Login from './features/auth/Login';
import Chat from './features/chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
