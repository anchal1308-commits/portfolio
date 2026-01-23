import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'mobile-banking-redesign',
    title: 'Mobile Banking Redesign',
    subtitle: 'Simplifying financial management for millennials',
    category: 'Product',
    heroImage: '/images/projects/banking/hero.jpg',
    thumbnail: '/images/projects/banking/thumbnail.jpg',
    year: 2024,
    client: 'FinTech Corp',
    duration: '3 months',
    role: 'Lead Product Designer',
    overview: 'Redesigned the mobile banking application to improve user engagement and simplify complex financial tasks. The goal was to create an intuitive interface that would appeal to younger users while maintaining security and trust.',
    challenge: 'The existing mobile banking app suffered from low user engagement and high abandonment rates. Users found the interface overwhelming with too many options presented upfront, and critical tasks like transfers and bill payments required too many steps to complete.',
    process: [
      {
        title: 'User Research',
        description: 'Conducted 20+ user interviews and analyzed behavioral data to understand pain points. Created user personas and journey maps to identify key opportunities for improvement.',
        image: '/images/projects/banking/research.jpg'
      },
      {
        title: 'Information Architecture',
        description: 'Reorganized the app structure based on user mental models. Prioritized the most common tasks and reduced navigation depth from 4-5 levels to 2-3 levels.',
        image: '/images/projects/banking/ia.jpg'
      },
      {
        title: 'Design & Prototyping',
        description: 'Created high-fidelity prototypes with smooth animations and micro-interactions. Conducted usability testing with 15 participants to validate design decisions.',
        image: '/images/projects/banking/prototype.jpg'
      },
      {
        title: 'Visual Design',
        description: 'Developed a modern, minimalist visual language that balances approachability with professionalism. Created a comprehensive design system for consistency across all touchpoints.',
        image: '/images/projects/banking/visual.jpg'
      }
    ],
    solution: 'A clean, card-based interface that surfaces the most important information and actions on the home screen. Implemented smart shortcuts that learn from user behavior, and simplified critical flows to reduce task completion time by 60%.',
    outcomes: [
      {
        metric: 'User Engagement',
        value: '+45%',
        description: 'Increase in daily active users within 3 months of launch'
      },
      {
        metric: 'Task Completion',
        value: '+60%',
        description: 'Faster average task completion time'
      },
      {
        metric: 'User Satisfaction',
        value: '4.7/5',
        description: 'App store rating improved from 3.2 to 4.7'
      }
    ],
    images: [
      {
        url: '/images/projects/banking/screen-1.jpg',
        alt: 'Home screen showing account overview',
        caption: 'Streamlined home screen with key account information'
      },
      {
        url: '/images/projects/banking/screen-2.jpg',
        alt: 'Transfer flow',
        caption: 'Simplified transfer process with smart suggestions'
      }
    ],
    tags: ['Mobile App', 'FinTech', 'User Research', 'UI/UX']
  },
  {
    id: '2',
    slug: 'ecommerce-checkout-optimization',
    title: 'E-commerce Checkout Optimization',
    subtitle: 'Reducing cart abandonment through better UX',
    category: 'UX',
    heroImage: '/images/projects/ecommerce/hero.jpg',
    thumbnail: '/images/projects/ecommerce/thumbnail.jpg',
    year: 2024,
    client: 'Fashion Retailer',
    duration: '2 months',
    role: 'UX Designer',
    overview: 'Optimized the checkout experience for a major fashion e-commerce platform to reduce cart abandonment and increase conversion rates. Focused on removing friction points and building user confidence throughout the purchase journey.',
    challenge: 'The client was experiencing a 68% cart abandonment rate, significantly higher than industry average. Analytics revealed that users were dropping off at multiple stages of the checkout process, with particular issues around form complexity and shipping information.',
    process: [
      {
        title: 'Analytics Review',
        description: 'Analyzed funnel data to identify drop-off points. Conducted heatmap analysis and session recordings to understand user behavior patterns.',
        image: '/images/projects/ecommerce/analytics.jpg'
      },
      {
        title: 'Competitive Analysis',
        description: 'Studied best practices from top e-commerce sites. Identified patterns in successful checkout flows and opportunities for differentiation.',
        image: '/images/projects/ecommerce/competitive.jpg'
      },
      {
        title: 'User Testing',
        description: 'Ran moderated usability tests with 12 participants to observe real checkout behavior. Gathered qualitative feedback on pain points and areas of confusion.',
        image: '/images/projects/ecommerce/testing.jpg'
      },
      {
        title: 'Iterative Design',
        description: 'Created multiple iterations of the checkout flow, testing each version with users. Refined the design based on feedback and conversion data.',
        image: '/images/projects/ecommerce/iterations.jpg'
      }
    ],
    solution: 'Implemented a single-page checkout with progressive disclosure of information. Added real-time validation, guest checkout option, and clear progress indicators. Integrated trust signals and transparent shipping costs upfront.',
    outcomes: [
      {
        metric: 'Cart Abandonment',
        value: '-32%',
        description: 'Reduction in cart abandonment rate'
      },
      {
        metric: 'Conversion Rate',
        value: '+23%',
        description: 'Increase in overall checkout conversion'
      },
      {
        metric: 'Revenue',
        value: '+$2.4M',
        description: 'Additional annual revenue from improved conversion'
      }
    ],
    images: [
      {
        url: '/images/projects/ecommerce/screen-1.jpg',
        alt: 'Checkout overview',
        caption: 'Single-page checkout with clear progress indicators'
      },
      {
        url: '/images/projects/ecommerce/screen-2.jpg',
        alt: 'Payment section',
        caption: 'Simplified payment form with trust signals'
      }
    ],
    tags: ['E-commerce', 'Conversion Optimization', 'User Testing', 'UX']
  },
  {
    id: '3',
    slug: 'design-system-creation',
    title: 'Enterprise Design System',
    subtitle: 'Building consistency across 15+ products',
    category: 'UI',
    heroImage: '/images/projects/design-system/hero.jpg',
    thumbnail: '/images/projects/design-system/thumbnail.jpg',
    year: 2023,
    client: 'SaaS Platform',
    duration: '6 months',
    role: 'Senior Product Designer',
    overview: 'Led the creation of a comprehensive design system for an enterprise SaaS company with 15+ products. The system needed to provide consistency while allowing flexibility for different product needs and use cases.',
    challenge: 'The company\'s products had evolved independently over 5 years, resulting in inconsistent experiences, duplicated work, and slow feature development. Different teams were using different component libraries, creating a fragmented user experience.',
    process: [
      {
        title: 'Audit & Discovery',
        description: 'Conducted a comprehensive audit of all existing products. Documented inconsistencies and identified common patterns. Interviewed designers and developers across teams to understand needs.',
        image: '/images/projects/design-system/audit.jpg'
      },
      {
        title: 'Foundation & Principles',
        description: 'Established design principles and foundations including color, typography, spacing, and elevation systems. Created comprehensive documentation for each decision.',
        image: '/images/projects/design-system/foundations.jpg'
      },
      {
        title: 'Component Library',
        description: 'Built a library of 50+ reusable components in Figma with variants for different states and configurations. Worked closely with engineering to ensure design-dev parity.',
        image: '/images/projects/design-system/components.jpg'
      },
      {
        title: 'Documentation & Governance',
        description: 'Created comprehensive documentation including usage guidelines, accessibility standards, and contribution processes. Established a governance model for ongoing maintenance.',
        image: '/images/projects/design-system/documentation.jpg'
      }
    ],
    solution: 'A complete design system with atomic components, pattern libraries, and detailed documentation. Implemented in both Figma and React, with automated testing and version control. Includes accessibility guidelines and internationalization support.',
    outcomes: [
      {
        metric: 'Design Time',
        value: '-50%',
        description: 'Reduction in time to design new features'
      },
      {
        metric: 'Development Speed',
        value: '+40%',
        description: 'Faster implementation of UI changes'
      },
      {
        metric: 'Consistency Score',
        value: '94%',
        description: 'Measured consistency across all products'
      }
    ],
    images: [
      {
        url: '/images/projects/design-system/screen-1.jpg',
        alt: 'Component library',
        caption: 'Comprehensive component library in Figma'
      },
      {
        url: '/images/projects/design-system/screen-2.jpg',
        alt: 'Documentation site',
        caption: 'Interactive documentation and guidelines'
      }
    ],
    tags: ['Design System', 'Component Library', 'Figma', 'Documentation']
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category)
}
