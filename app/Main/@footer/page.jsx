// app/@footer/page.jsx
export default async function footer() {
  await new Promise((res) => setTimeout(res, 5000)); // 5 sec delay
  return <footer style={{ background: "#ccc" }}>✅ Footer Loaded</footer>;
}
