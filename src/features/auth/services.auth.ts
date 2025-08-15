import api from '@/lib/api';

export async function login(data: { email: string; password: string }) {
  return await api.post('/auth/login', { ...data }).catch((err) => {
    if (err.response?.status === 401)
      throw new Error('Invalid email or password');

    throw new Error(err.response?.data?.message || 'Login failed');
  });
}

export async function signup(data: {
  name: string;
  email: string;
  password: string;
}) {
  return await api.post('/auth/signup', { ...data }).catch((err) => {
    if (err.response?.status === 409) throw new Error('Email already exists');

    throw new Error('Signup failed');
  });
}
