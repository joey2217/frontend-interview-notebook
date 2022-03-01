import React, { memo, PropsWithChildren } from 'react'

const Highlight: React.FC<PropsWithChildren<{ color: string }>> = ({
  children,
  color,
}) => {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}
    >
      {children}
    </span>
  )
}

export default memo(Highlight)
