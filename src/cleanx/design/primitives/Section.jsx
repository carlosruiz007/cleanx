import React from 'react';

function Section({ children, className = '', ...props }) {
  return (
    <section className={`py-10 bp-lg:py-14 bp-xl:py-16 ${className}`} {...props}>
      {children}
    </section>
  );
}

export default Section;
