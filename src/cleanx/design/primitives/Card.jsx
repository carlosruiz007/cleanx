import React from 'react';

function Card({ children, className = '', ...props }) {
  return (
    <div className={`rounded-3xl border border-[rgba(1,5,40,0.08)] bg-white shadow-medium ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;
