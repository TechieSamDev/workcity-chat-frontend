import { useEffect, useState } from 'react';
import { useSession } from '../auth/hooks.auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import useAppAuth from '@/hooks/useAppAuth';
import Messages from './Messages';
import SelectRecipient from './SelectRecipient';
import socket from '@/lib/socket';

export type Recipient = {
  socketId: string;
  id: string;
  name: string;
};
const Chat = () => {
  const [recipient, setRecipient] = useState<Recipient | null>(null);
  const [userData] = useAppAuth();
  const { isLoading, error } = useSession(userData?.token as string);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(
        error.message || 'An error occurred while fetching session data'
      );
      navigate('/login');
    }
  }, [error, navigate]);

  useEffect(() => {
    socket.emit('register', userData?.token);
  }, [userData?.token]);

  if (isLoading || error /*added error to prevent chat page flash*/)
    return <div>Loading...</div>;

  return (
    <div className="flex h-screen border items-center justify-center">
      <div className="border">
        {!recipient ? (
          <SelectRecipient setRecipient={setRecipient} />
        ) : (
          <Messages setRecipient={setRecipient} recipient={recipient} />
        )}
      </div>
    </div>
  );
};

export default Chat;
