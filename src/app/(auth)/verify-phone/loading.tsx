import React from 'react'

function loading({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      {children}
    </div>
  )
}

export default loading
