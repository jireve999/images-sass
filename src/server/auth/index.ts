import { db } from "@/server/db/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { AuthOptions, getServerSession as nextAuthGetServerSession } from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";

export const authOptions: AuthOptions= {
  adapter: DrizzleAdapter(db),
  // Configure one or more authentication providers
  providers: [
    GitlabProvider({
      clientId: process.env.NEXTAUTH_CLIENTID!,
      clientSecret: process.env.NEXTAUTH_CLIENTSECRET!,
      httpOptions: { timeout: 10000 },
    })
  ],
}

export function getServerSession() {
  return nextAuthGetServerSession(authOptions);
}


