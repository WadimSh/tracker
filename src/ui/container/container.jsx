import React from "react";

const Container = ({ className, children }) => {

  return (
    <section className={className}>
      {children}
    </section>
  )
};

export default Container;