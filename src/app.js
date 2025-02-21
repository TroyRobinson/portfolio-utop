import * as React from 'react'
import '../public/globals.css'
import { FlexCol } from './utils'

const Section = ({ title, children, style }) => (
  <div style={{ padding: '2rem 0', width: '100%', maxWidth: '800px', margin: '0 auto', ...style }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>{title}</h2>
    {children}
  </div>
)

const ProjectCard = ({ title, description, link }) => (
  <div style={{ 
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    ':hover': { transform: 'translateY(-2px)' }
  }}>
    <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: '#666' }}>{description}</p>
    {link && <a href={link} style={{ color: '#0066cc', textDecoration: 'none' }}>View Project →</a>}
  </div>
)

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'white',
        alignItems: 'center',
      }}
    >
      {/* Header/Intro Section */}
      <Section style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>John Doe</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Full-stack developer passionate about creating beautiful and functional web applications
        </p>
      </Section>

      {/* Projects Section */}
      <Section title="Projects">
        <ProjectCard 
          title="E-commerce Platform"
          description="A full-stack e-commerce solution built with React and Node.js"
          link="#"
        />
        <ProjectCard 
          title="Weather App"
          description="Real-time weather application using OpenWeather API"
          link="#"
        />
        <ProjectCard 
          title="Task Manager"
          description="A minimalist task management application with React"
          link="#"
        />
      </Section>

      {/* Skills Section */}
      <Section title="Skills">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem',
          justifyContent: 'center' 
        }}>
          {['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'Python', 'Git'].map((skill) => (
            <span key={skill} style={{
              padding: '0.5rem 1rem',
              background: '#f5f5f5',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Contact" style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem' }}>Let's work together!</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="mailto:john@example.com" style={{ color: '#0066cc', textDecoration: 'none' }}>Email</a>
          <a href="https://github.com" style={{ color: '#0066cc', textDecoration: 'none' }}>GitHub</a>
          <a href="https://linkedin.com" style={{ color: '#0066cc', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </Section>
    </FlexCol>
  )
}
