export type User = {
  _id: string
  name: string;
  email: string;
  role: 'buyer' | 'agent' | 'merchant';
  password: string;
};
