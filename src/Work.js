import * as React from 'react'
import { FlexCol } from './utils'
import Navigation from './components/Navigation'

const WorkSection = ({ title, description, skills }) => (
  <div
    style={{
      padding: '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      marginBottom: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}
  >
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
      {title}
    </h3>
    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
      {description}
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {skills.map((skill) => (
        <span
          key={skill}
          style={{
            padding: '0.25rem 0.75rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '15px',
            fontSize: '0.875rem',
            color: '#555',
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

function Work() {
  const workTypes = [
    {
      title: 'Web Development',
      description: 'Creating responsive, modern web applications using React, Next.js, and other cutting-edge technologies. Focus on clean code, performance, and exceptional user experience.',
      skills: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that balance form and function. Creating cohesive design systems and user-centered experiences.',
      skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Accessibility'],
    },
    {
      title: 'Technical Consulting',
      description: 'Providing expert guidance on technology choices, architecture decisions, and best practices. Helping teams adopt modern development workflows.',
      skills: ['Architecture', 'Tech Strategy', 'Team Leadership', 'Agile', 'DevOps'],
    },
  ]

  return (
    <FlexCol
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        paddingTop: '6rem', // Extra padding to account for navigation
      }}
    >
      <Navigation />
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#333',
            textAlign: 'center',
          }}
        >
          My Work
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#666',
            marginBottom: '3rem',
            textAlign: 'center',
            lineHeight: '1.6',
          }}
        >
          I specialize in creating exceptional digital experiences through various
          types of work. Here's what I can do for you:
        </p>
        {workTypes.map((work) => (
          <WorkSection key={work.title} {...work} />
        ))}
      </div>
    </FlexCol>
  )
}

export default Work
