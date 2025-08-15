import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './features/auth/SignUp';
import Login from './features/auth/Login';
import Chat from './features/chat/Chat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
