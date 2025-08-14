import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-8 md:w-96 w-full mx-5 border rounded bg-gray-50" onSubmit={() => {}}>
        <h1 className='py-3'>Login To WorkCity Chat</h1>
        <div className="space-y-6">
          <div>
            <div className="relative">
              <Input type="email" placeholder="johndoe@gmail.com" />
            </div>
          </div>

          <div>
            <div className="relative">
              <Input type="password" placeholder="Enter your password" />
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

        <Button className="w-full mt-3">Login</Button>
      </form>
    </div>
  );
};

export default Login;
