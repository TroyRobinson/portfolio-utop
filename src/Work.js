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

const CaseStudyCard = ({ title, description, image, slug, featured, technologies = [] }) => {
  // Determine if this is running in Next.js or not
  const isNextJs = typeof window !== 'undefined' && window.__NEXT_DATA__
  
  // Create the link URL
  const href = `/work/${slug}`
  
  return (
    <div
      style={{
        padding: '0',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {featured && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: '#ffdd57',
            padding: '0.25rem 0.75rem',
            borderRadius: '15px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: '#856404',
            zIndex: 1,
          }}
        >
          Featured
        </div>
      )}
      
      {image && (
        <div
          style={{
            height: '200px',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
          {title}
        </h3>
        
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
          {description}
        </p>
        
        {technologies.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {technologies.slice(0, 3).map((tech) => (
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
            {technologies.length > 3 && (
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '15px',
                  fontSize: '0.875rem',
                  color: '#555',
                }}
              >
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        )}
        
        {isNextJs ? (
          <a
            href={href}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#333',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'background-color 0.2s',
            }}
          >
            View Case Study →
          </a>
        ) : (
          <a
            href={href}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#333',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'background-color 0.2s',
            }}
          >
            View Case Study →
          </a>
        )}
      </div>
    </div>
  )
}

function Work({ caseStudies = [] }) {
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

  // Display featured case studies at the top
  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);
  const sortedCaseStudies = [...featuredStudies, ...otherStudies];

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
          All My Work
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
        
        {/* Services section */}
        <h2 
          style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem', 
            color: '#333',
            textAlign: 'center',
          }}
        >
          Services
        </h2>
        {workTypes.map((work) => (
          <WorkSection key={work.title} {...work} />
        ))}
        
        {/* Case Studies section */}
        {sortedCaseStudies.length > 0 && (
          <>
            <h2 
              style={{ 
                fontSize: '2rem', 
                marginTop: '4rem',
                marginBottom: '2rem', 
                color: '#333',
                textAlign: 'center',
              }}
            >
              Case Studies
            </h2>
            <div>
              {sortedCaseStudies.map((study) => (
                <CaseStudyCard key={study.slug} {...study} />
              ))}
            </div>
          </>
        )}
      </div>
    </FlexCol>
  )
}

export default Work