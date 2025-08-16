import useAppAuth from '@/hooks/useAppAuth';
type Message = {
  message: string;
  sender: string;
};

const MessageItem = ({ message }: { message: Message }) => {
  const [userData] = useAppAuth();
  console.log(userData);
  return (
    <div
      key={message.sender}
      className={`p-3 rounded-lg ${
        message.sender === userData?._id
          ? 'bg-green-100 ml-32 '
          : 'bg-blue-100 mr-32'
      }`}
    >
      <div className="text-md">{message.message}</div>
    </div>
  );
};

export default MessageItem;
