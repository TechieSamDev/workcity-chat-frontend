import { useEffect, useState } from 'react';
import socket from '@/lib/socket';
import type { Recipient } from './Chat';
import useAppAuth from '@/hooks/useAppAuth';

type SelectChatWithProps = {
  setRecipient: React.Dispatch<React.SetStateAction<Recipient | null>>;
};
type OnlineUser = {
  [id: string]: {
    name: string;
    role: string;
    socketId: string;
  };
};
const SelectChatWith = ({ setRecipient }: SelectChatWithProps) => {
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser>({});
  const [userData] = useAppAuth();

  useEffect(() => {
    socket.on('online_users', (o) => {
      console.log('Online users:', o);
      setOnlineUsers(o);
    });
  }, [onlineUsers]);

  const renderOnlineUser = () =>
    Object.keys(onlineUsers)
      ?.filter((u) => u !== userData?._id)
      .map((id: string, i) => (
        <div className="flex items-center border p-2 py-3 gap-2 hover:bg-gray-200 rounded">
          <span className="font-bold">{i + 1}. </span>
          <div
            onClick={() => setRecipient({ ...onlineUsers[id], id })}
            className=" w-full text-start flex justify-between"
          >
            <span> {onlineUsers[id]?.name} </span>-
            <span className="bg-blue-300 text-gray-50 p-1 text-xs rounded-2xl">
              {onlineUsers[id]?.role}
            </span>
          </div>
        </div>
      ));

  return (
    <div>
      <div className="flex flex-col justify-self-center align-center gap-2 border p-5">
        <p>Welcome, Who do you want to chat with?</p>
        <div className="flex justify-between items-center bg-gray-100 p-2">
          <p>Online Users</p>
        </div>
        <div className="space-y-3">{renderOnlineUser()}</div>
      </div>
    </div>
  );
};

export default SelectChatWith;
