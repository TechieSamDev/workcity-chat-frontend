import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useSignup } from './hooks.auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: signup, isPending } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    signup(
      { name, email, password },
      {
        onSuccess: () => {
          toast.success('Sign up successful! Please log in.');
          navigate('/login');
        },
        onError: (err) => toast.error(err.message),
      }
    );
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="p-8 md:w-96 w-full mx-5 border rounded bg-gray-50"
        onSubmit={handleSubmit}
      >
        <h1 className="py-3">SignUp On WorkCity Chat</h1>
        <div className="space-y-6">
          <div className="">
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name e.g John Doe"
            />
          </div>

          <div className="">
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email e.g johndoe@gmail.com"
            />
          </div>

          <div className="">
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <Button disabled={isPending} className="w-full mt-3">
          {isPending ? 'Signing up...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
