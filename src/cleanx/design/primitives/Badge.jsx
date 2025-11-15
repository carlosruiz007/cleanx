import React from 'react';

function Badge({ children, className = '', ...props }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-[rgba(1,5,40,0.12)] bg-white px-3 py-1 text-[12px] leading-[18px] text-[var(--cleanx-navy)] ${className}`} {...props}>
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--cleanx-accent)', boxShadow: '0 0 0 1px var(--cleanx-navy) inset' }} />
      {children}
    </span>
  );
}

export default Badge;
