import { useEffect, useRef, useState } from 'react';
import MessageItem from './MessageItem';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
// const messages = []
const messages = [
  {
    id: 2,
    role: 'assistant',
    content: 'I am looking for information about your services.',
    timestamp: new Date().toISOString(),
  },
  {
    id: 1,
    role: 'user',
    content: 'Hello, how can I help you today?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    role: 'assistant',
    content: 'Can you tell me more about your pricing?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    role: 'user',
    content: 'Sure, our basic plan starts at $10 per month.',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    role: 'assistant',
    content: 'Can you tell me more about your pricing?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    role: 'user',
    content: 'Sure, our basic plan starts at $10 per month.',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    role: 'assistant',
    content: 'Can you tell me more about your pricing?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    role: 'user',
    content: 'Sure, our basic plan starts at $10 per month.',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    role: 'assistant',
    content: 'Can you tell me more about your pricing?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    role: 'user',
    content: 'Sure, our basic plan starts at $10 per month.',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    role: 'assistant',
    content: 'Can you tell me more about your pricing?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    role: 'user',
    content: 'Sure, our basic plan starts at $10 per month.',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    role: 'assistant',
    content: 'Can you tell me more about your pricing?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    role: 'user',
    content: 'Sure, our basic plan starts at $10 per month.',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    role: 'assistant',
    content: 'Can you tell me more about your pricing?',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    role: 'user',
    content: 'Sure, our basic plan starts at $10 per month.',
    timestamp: new Date().toISOString(),
  },
];
type ChatWith = 'agent' | 'merchant';
const Chat = () => {
  const [chatting, setChatting] = useState<boolean>();
  const chattingWith = useRef<ChatWith>(null);

  const handleStartChat = () => {
    if (!chattingWith.current) return;
    setChatting(true);
  };

  useEffect(() => {
    console.log('hh');
  }, [chatting]);
  return (
    <div className="flex h-screen border items-center justify-center">
      <div className="border">
        {!chatting ? (
          <div className="flex flex-col justify-self-center align-center gap-2 border p-5">
            <p>Welcome, Who do you want to chat with?</p>
            <RadioGroup
              onValueChange={(val: ChatWith) => (chattingWith.current = val)}
              defaultValue=""
            >
              <label
                htmlFor="agent"
                className="flex items-center space-x-2 border p-2 rounded"
              >
                <RadioGroupItem
                  // onChange={setChatWith}
                  value="agent"
                  id="agent"
                />
                <span>Chat with Agent</span>
              </label>
              <label
                htmlFor="merchant"
                className="flex items-center space-x-2 border p-2 rounded"
              >
                <RadioGroupItem value="merchant" id="merchant" />
                <span>Chat with Merchant</span>
              </label>
            </RadioGroup>

            <Button onClick={handleStartChat}>Start Chat</Button>
          </div>
        ) : (
          <div className="space-y-4 h-screen relative min-w-96">
            <div className=" bg-gray-50 p-2 py-5">WorkCity Chat</div>
            <div className="max-h-[85vh] space-y-4 px-2 overflow-y-scroll">
              {messages?.map((message) => (
                <MessageItem message={message} key={message.id} />
              ))}
            </div>

            <div className="flex absolute bottom-2 left-2 right-2 bg-white p-2">
              <Input className="rounded-r-none bg-white" />
              <Button className="rounded-l-none">
                <Send />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
