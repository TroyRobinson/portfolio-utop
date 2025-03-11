import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import CaseStudyLayout from '../../components/CaseStudyLayout'
import { getCaseStudyBySlug, getCaseStudySlugs } from '../../lib/case-studies'

// Custom components that can be used in MDX
const components = {
  h2: (props) => <h2 {...props} style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', color: '#333' }} />,
  h3: (props) => <h3 {...props} style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: '#444' }} />,
  p: (props) => <p {...props} style={{ marginBottom: '1rem' }} />,
  ul: (props) => <ul {...props} style={{ marginBottom: '1rem', paddingLeft: '2rem' }} />,
  li: (props) => <li {...props} style={{ marginBottom: '0.5rem' }} />,
  img: (props) => (
    <div style={{ margin: '2rem 0' }}>
      <img {...props} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
    </div>
  ),
  a: (props) => <a {...props} style={{ color: '#0066cc', textDecoration: 'none' }} />,
  blockquote: (props) => (
    <blockquote
      {...props}
      style={{
        borderLeft: '4px solid #ddd',
        paddingLeft: '1rem',
        fontStyle: 'italic',
        margin: '1.5rem 0',
        color: '#666',
      }}
    />
  ),
}

export default function CaseStudyPage({ source, frontMatter }) {
  // Handle case where the case study doesn't exist
  if (!source) {
    return (
      <CaseStudyLayout>
        <h1>Case Study Not Found</h1>
        <p>Sorry, the case study you're looking for doesn't exist.</p>
      </CaseStudyLayout>
    )
  }

  return (
    <CaseStudyLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={components} />
    </CaseStudyLayout>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const caseStudy = getCaseStudyBySlug(slug)

  // If case study not found, return with notFound flag
  if (!caseStudy) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(caseStudy.content)

  return {
    props: {
      source: mdxSource,
      frontMatter: caseStudy.frontMatter,
    },
  }
}

export async function getStaticPaths() {
  const paths = getCaseStudySlugs().map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}