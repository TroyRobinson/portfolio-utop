import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the case studies directory
const caseStudiesDirectory = path.join(process.cwd(), 'src/case-studies');

export function getCaseStudySlugs() {
  // If running on the client side or the directory doesn't exist, return empty array
  if (typeof window !== 'undefined' || !fs.existsSync(caseStudiesDirectory)) {
    return [];
  }
  return fs.readdirSync(caseStudiesDirectory)
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => filename.replace(/\.mdx$/, ''));
}

export function getCaseStudyBySlug(slug) {
  if (typeof window !== 'undefined') {
    return null;
  }
  
  const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
  
  // Return null if the file doesn't exist
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontMatter: data,
    content
  };
}

export function getAllCaseStudies() {
  const slugs = getCaseStudySlugs();
  const caseStudies = slugs
    .map(slug => getCaseStudyBySlug(slug))
    .filter(caseStudy => caseStudy !== null)
    .sort((study1, study2) => {
      // Sort by date if available, otherwise by title
      if (study1.frontMatter.date && study2.frontMatter.date) {
        return new Date(study2.frontMatter.date).getTime() - new Date(study1.frontMatter.date).getTime();
      }
      return study1.frontMatter.title.localeCompare(study2.frontMatter.title);
    });
  
  return caseStudies;
}