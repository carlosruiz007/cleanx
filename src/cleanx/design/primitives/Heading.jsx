import React from 'react';

function Heading({ as: As = 'h1', children, weight = '700', className = '', style = {}, ...props }) {
  const cls = `font-heading text-[var(--cleanx-navy)] ${className}`;
  return (
    <As className={cls} style={{ fontWeight: Number(weight), ...style }} {...props}>
      {children}
    </As>
  );
}

export default Heading;
