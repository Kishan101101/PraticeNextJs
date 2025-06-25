// app/@header/page.jsx
export default async function header() {
  await new Promise((res) => setTimeout(res, 3000)); // 3 sec delay
  return <header style={{ background: "#eee" }}>✅ Header Loaded</header>;
}
