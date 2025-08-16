import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Send } from 'lucide-react';
import MessageItem from './MessageItem';
import socket from '@/lib/socket';
import type { Recipient } from './Chat';
import { useEffect, useState } from 'react';
import useAppAuth from '@/hooks/useAppAuth';

type MessagesProps = {
  setRecipient: React.Dispatch<React.SetStateAction<Recipient | null>>;
  recipient: Recipient;
};

const Messages = ({ setRecipient, recipient }: MessagesProps) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<
    {
      message: string;
      sender: string;
    }[]
  >([]);
  const [userData] = useAppAuth();

  useEffect(() => {
    const handler = (data: { message: string; sender: string }) => {
      console.log('Got private message:', data);
      setChat((prev) => [
        ...prev,
        { message: data.message, sender: data.sender },
      ]);
    };

    socket.on('private-message', handler);

    return () => {
      socket.off('private-message', handler);
    };
  }, []);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData) return;

    socket.emit('private-message', {
      token: userData?.token,
      recipientSocketId: recipient.socketId,
      message,
    });

    setChat((prev) => [...prev, { message, sender: userData._id.toString() }]);

    setMessage('');
  };

  return (
    <div className="space-y-4 h-screen relative min-w-96">
      <div className=" bg-gray-50 p-2 py-5 flex items-center gap-5">
        <Button variant="outline" onClick={() => setRecipient(null)}>
          <ChevronLeft />
        </Button>
        <span>{recipient?.name} </span>
      </div>
      <div className="max-h-[85vh] border  space-y-4 px-2 overflow-y-scroll">
        {chat?.map((message) => (
          <MessageItem message={message} />
        ))}
      </div>

      <form
        onSubmit={handleSendMessage}
        className="flex absolute bottom-2 left-2 right-2 bg-gray-300 rounded border p-2"
      >
        <Input
          className="rounded-r-none bg-white"
          value={message}
          onChange={(e) => setMessage(e?.target?.value)}
        />

        <Button className="rounded-l-none">
          <Send />
        </Button>
      </form>
    </div>
  );
};

export default Messages;
