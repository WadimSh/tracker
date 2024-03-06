import React from "react";

const Container = ({ title, className, children }) => {

  return (
    <section className={className}>
      <div>
        <h2>
          {title || 'Заголовок секции'}
        </h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
};

export default Container;