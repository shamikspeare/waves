import { id } from './node_modules/next-auth/client/__tests__/helpers/mocks.d';
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
 
  interface Session {
    user: {
      /** The user's postal address. */
      id: string
    } & DefaultSession["user"]
  }
}
//used for logging in not for signing up using email and password