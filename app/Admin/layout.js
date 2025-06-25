import AdminHeader from "@/components/AdminHeader";

function layout({ children }) {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}

export default layout;
