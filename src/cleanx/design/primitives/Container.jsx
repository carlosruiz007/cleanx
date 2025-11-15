import React from 'react';

function Container({ children, className = '', ...props }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 bp-lg:px-10 bp-xl:px-12 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Container;
