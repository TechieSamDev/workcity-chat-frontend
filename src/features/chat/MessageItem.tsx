const MessageItem = ({ message }) => {
  return (
    <div
      key={message.id}
      className={`p-3 rounded-lg ${
        message.role === 'user' ? 'bg-blue-100 mr-32' : 'bg-green-100 ml-32'
      }`}
    >
      <div className="text-sm text-gray-600">
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
      <div className="text-md">{message.content}</div>
    </div>
  );
};

export default MessageItem;
