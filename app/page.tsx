import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const user = await currentUser()
  const username = user?.username;

  return (
    <div>
      {username && <div>Hello {username} 👋!</div>}
    </div>
  );
}


//eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18ydjltNlhLd3dja2plSXBBVFM2Sm9jREUzMG8iLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NDU1NzQ5NDksImZ2YSI6WzUzNDcsLTFdLCJpYXQiOjE3NDU1NzQ4ODksImlzcyI6Imh0dHBzOi8vbWVhc3VyZWQtbW9ua2V5LTM1LmNsZXJrLmFjY291bnRzLmRldiIsIm5iZiI6MTc0NTU3NDg3OSwic2lkIjoic2Vzc18ydzJ5ZmZqTnZVeDdlU1VSTjExUGp6czZTbEciLCJzdWIiOiJ1c2VyXzJ2d0pxS0RSeWhld0JqQlN1QXJJTDZXWEJtMSJ9.I3a9HhMQuFWpzYpEInz6tfK4pyV58GMf8AUbiFKnUeejD45IMvZdlXgV-jAN02Feq4UJaaK3Yr5eUcsouSj4RP4ieorUv6LquIJhXefGR8LanbiG_UJYLb1MFgtwdFCodtK2_DBRRJkA2bMeb9dLVazSji6RhIFuPL5x5Txh19mG3PQR4tC6N1eI0rs7Q_15xjjlrY6MTxkdBOp_HlF6lWepLKFpZYBHk7-xEju3d4C2W-09GeTGWtfE68Tl6izfLlFdgTFTmrEvo7AcNHM5zyQIxBibE-fjPFsh_sIWHIE8vYeg5YiQP4ZHaSXhWSGxauhAcHkUd-SsMa2D_4b7DQ