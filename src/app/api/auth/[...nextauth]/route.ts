import { db } from "@/server/db/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";
export const authOptions: AuthOptions= {
  adapter: DrizzleAdapter(db),
  // Configure one or more authentication providers
  providers: [
    GitlabProvider({
      clientId: '25521b51b3f16a006b48da4e5737e8ab8c0065072535f84094e056829ac31116',
      clientSecret: 'gloas-d89e7c5a399be6635419d2e5b00e9c6886451234e4027e832b60de0a200cf847',
      httpOptions: { timeout: 10000 },
    })
  ],
}
const handler =  NextAuth(authOptions);
export { handler as GET, handler as POST };

