// app/CatchAll/[...add]/page.jsx

import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

//it is treated as a asynchhronous task in Next.js
export default async function Page({ params }) {
  const { add } = await params; // 👈 required in Next.js 15
  if (add?.[0] === "admin") {
    return <AdminPage />;
  }

  return <UserPage />;
}
