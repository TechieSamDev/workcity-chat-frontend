export type User = {
  name: string;
  email: string;
  role: 'buyer' | 'agent' | 'merchant';
  password: string;
};
