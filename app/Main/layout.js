import React from "react";

function layout({ children, header, footer }) {
  return (
    <section>
      {header}
      {children}
      {footer}
    </section>
  );
}

export default layout;
