/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from 'react';

export interface IAuthContext {
  signin: ({ email, password }: { email: string; password: string }) => void;
  signout: () => void;
}

export const AuthContext = createContext<IAuthContext>(null!);
