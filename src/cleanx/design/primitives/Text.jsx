import React from 'react';

function Text({ as = 'p', children, className = '', style = {}, ...props }) {
  const Comp = as;
  const cls = `font-sans text-[var(--cleanx-text)] ${className}`;
  return (
    <Comp className={cls} style={style} {...props}>
      {children}
    </Comp>
  );
}

export default Text;
