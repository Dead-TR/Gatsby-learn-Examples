import React from 'react';

export default function Layout({children}) {
  const styleLayout = {
    margin: "3rem auto",
    maxWidth: 650,
    padding: '0 1rem'
  }

  return (
    <div style={styleLayout}>
      <h1>Main title</h1>
      {children}
    </div>
  )
}
