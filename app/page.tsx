import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const username = user?.username;

  return <div>{username && <div>Hello {username} 👋!</div>}</div>;
}
