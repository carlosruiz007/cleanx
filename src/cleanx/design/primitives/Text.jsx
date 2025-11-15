import React from 'react';

function Text({ as: As = 'p', children, className = '', style = {}, ...props }) {
  const cls = `font-sans text-[var(--cleanx-text)] ${className}`;
  return (
    <As className={cls} style={style} {...props}>
      {children}
    </As>
  );
}

export default Text;
