import React from 'react';

function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl font-medium transition-none focus:outline-none border-0 shadow-none';

  const sizes = {
    sm: 'px-[14px] py-[10px] text-[14px] leading-[20px]',
    md: 'px-[18px] py-[12px] text-[15px] leading-[22px]',
    lg: 'px-[22px] py-[14px] text-[16px] leading-[24px]',
  };

  const variants = {
    primary: 'bg-[var(--cleanx-primary)] text-white',
    secondary: 'bg-white text-[var(--cleanx-navy)]',
    link: 'bg-transparent text-[var(--cleanx-primary)]',
  };

  const cls = `${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={cls} {...props}>{children}</button>
  );
}

export default Button;
