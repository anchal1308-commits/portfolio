export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  category: 'UX' | 'UI' | 'Branding' | 'Product'
  heroImage: string
  thumbnail: string
  year: number
  client?: string
  duration?: string
  role: string
  overview: string
  challenge: string
  process: ProcessStep[]
  solution: string
  outcomes: Outcome[]
  images: ProjectImage[]
  designDetails?: DesignDetail[]
  tags?: string[]
}

export interface ProcessStep {
  title: string
  description: string
  image?: string
}

export interface Outcome {
  metric: string
  value: string
  description: string
}

export interface ProjectImage {
  url: string
  alt: string
  caption?: string
}

export interface DesignDetail {
  title: string
  phase: 'exploration' | 'final'
  image: string
  alt: string
  insights?: string[]
  updates?: string[]
}
