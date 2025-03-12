import { getServerSession } from '@/server/auth';
import { redirect } from 'next/navigation';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  console.log(session, "-----only server can see");

  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  return <>{children}</>;
}
