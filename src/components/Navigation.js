import React from 'react'

export default function Navigation() {
  // This component adapts to whether it's running in Next.js or plain React
  const isNextJs = typeof window !== 'undefined' && window.__NEXT_DATA__

  // Style for the nav container
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1000,
  }

  // Style for the nav content
  const navContentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  }

  // Style for the links
  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 500,
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
  }

  // Style for link hover
  const linkHoverStyle = {
    backgroundColor: '#f0f0f0',
  }

  if (isNextJs) {
    // Using Next.js Link component when running in Next.js
    const { default: Link } = require('next/link')
    return (
      <nav style={navStyle}>
        <div style={navContentStyle}>
          <Link href="/" passHref>
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/work" passHref>
            <a style={linkStyle}>Work</a>
          </Link>
        </div>
      </nav>
    )
  }

  // Regular anchor tags when running in Utopia
  return (
    <nav style={navStyle}>
      <div style={navContentStyle}>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/work" style={linkStyle}>
          Work
        </a>
      </div>
    </nav>
  )
}
