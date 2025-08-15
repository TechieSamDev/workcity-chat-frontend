import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLogin } from './hooks.auth';
import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: login, isPending } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSuccess: () => {
          toast.success('Login successful!');
          navigate('/chat');
        },

        onError: () =>
          toast.error('Login failed. Please check your credentials.'),
      }
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="p-8 md:w-96 w-full mx-5 border rounded bg-gray-50"
        onSubmit={handleSubmit}
      >
        <h1 className="py-3">Login To WorkCity Chat</h1>
        <div className="space-y-6">
          <div>
            <div className="relative">
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="block text-gray-500 text-sm ">
                Forgot Password
              </span>
            </div>
          </div>
        </div>

        <Button className="w-full mt-3" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
};

export default Login;
