// app/CatchAll/[...add]/page.jsx
//it is treated as a asynchhronous task in Next.js 15
export default async function Page({ params }) {
  const { add } = await params; // 👈 required in Next.js 15

  return (
    <div>
      <h1>Catch All Route: {add?.join("/")}</h1>
    </div>
  );
}
