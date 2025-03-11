import React from 'react'
import { FlexCol } from '../utils'
import Navigation from './Navigation'

const CaseStudyLayout = ({ children, frontMatter = {} }) => {
  // Use double protection against undefined values
  const { title = '', date = '', image = '', technologies = [] } = frontMatter;
  
  // Rest of your component remains the same, but add a check before accessing technologies
  
  return (
    <FlexCol
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        paddingTop: '6rem',
      }}
    >
      <Navigation />
      
      <article
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}
      >
        <header style={{ marginBottom: '2rem' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              color: '#333',
              marginBottom: '1rem',
            }}
          >
            {title}
          </h1>
          
          {date && (
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
          
          {image && (
            <div style={{ marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src={image}
                alt={title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}
          
          {/* Add Array.isArray check for extra safety */}
          {Array.isArray(technologies) && technologies.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '15px',
                    fontSize: '0.875rem',
                    color: '#555',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div style={{ color: '#444', lineHeight: '1.7', fontSize: '1.1rem' }}>
          {children}
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          
            href="/work"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#333',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 500,
              transition: 'background-color 0.2s',
            }}
          >
            ← Back to Work
          </a>
        </div>
      </article>
    </FlexCol>
  )
}

export default CaseStudyLayout