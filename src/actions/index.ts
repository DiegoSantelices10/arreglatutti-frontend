'use server';

import { sessionOptions, SessionData, defaultSession } from '@/actions/types';
import { ISignIn, signIn } from '@/services/auth';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getSession = async () => {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (username: ISignIn) => {
  const session = await getSession();

  try {
    const { data } = await signIn(username);

    session.id = data.id;
    session.name = data.name;
    session.email = data.email;
    session.isLoggedIn = true;

    await session.save();
    return data;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect('/');
};
