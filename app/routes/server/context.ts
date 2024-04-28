import { RemixCreateContextFn } from 'trpc-remix/adapter';
import { AppRouter } from './routers/_app';
import { getSession } from './session';

export const createContext: RemixCreateContextFn<AppRouter> = async ({
  req,
}) => {
  const session = await getSession(req.headers.get('Cookie'));
  const user = session.get('user') || null;
  return { user };
};
