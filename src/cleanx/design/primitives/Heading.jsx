import React from 'react';

function Heading({ as = 'h1', children, weight = '700', className = '', style = {}, ...props }) {
  const Comp = as;
  const cls = `font-heading text-[var(--cleanx-navy)] ${className}`;
  return (
    <Comp className={cls} style={{ fontWeight: Number(weight), ...style }} {...props}>
      {children}
    </Comp>
  );
}

export default Heading;
