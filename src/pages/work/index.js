import React from 'react'
import Work from '../../Work'
import { getAllCaseStudies } from '../../lib/case-studies'

export default function WorkPage({ caseStudies }) {
  return <Work caseStudies={caseStudies} />
}

export async function getStaticProps() {
  // Get all case studies for the Work page
  const caseStudies = getAllCaseStudies().map(study => ({
    slug: study.slug,
    ...study.frontMatter
  }));

  return {
    props: {
      caseStudies,
    },
  }
}