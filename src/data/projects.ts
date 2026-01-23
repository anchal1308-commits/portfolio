import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'windows-365-cloud-apps',
    title: 'Windows 365 Cloud Apps',
    subtitle: 'A virtual app delivery solution for IT administrators',
    category: 'Product',
    heroImage: '/images/projects/windows-365/hero.jpg',
    thumbnail: '/images/projects/windows-365/thumbnail.jpg',
    year: 2024,
    client: 'Microsoft',
    duration: '8 months',
    role: 'Lead Product Designer',
    overview: 'Designed a seamless virtual app delivery experience integrated into Windows 365, enabling IT administrators to efficiently provision and manage cloud apps for shift workers and contractors. This solution addresses a critical product gap while enabling Windows 365 to deliver virtual apps on demand, unlocking 120K new seats by migrating existing VDI customers.',
    challenge: 'IT admins faced significant challenges with existing virtual app solutions: high learning curves, forced use of multiple separate solutions for desktops and apps, and the overhead of managing full desktops when only a few apps were needed. The goal was to leverage Windows 365 to provide a seamless and integrated virtual app delivery experience while working within constraints: no changes to Windows 365 existing capabilities, no control over Intune app model, and balancing urgent requirements with long-term strategic goals.',
    process: [
      {
        title: 'Discovery and Multi-Year Strategy',
        description: 'Worked with PMs and engineers through weekly syncs and customer calls. Established multi-year roadmap.'
      },
      {
        title: 'Design Principles',
        description: 'Defined three core principles with stakeholders: Seamless Integration, Consistency, and Simplicity.'
      },
      {
        title: 'Initial Designs and Research',
        description: 'Collaborated with cross-product designers and UX researchers. Conducted design critiques to validate concepts.'
      },
      {
        title: 'Iterations',
        description: 'Ran stakeholder workshops and critiques with PMs and design partners. Refined management flows.'
      },
      {
        title: 'Final Research and Design Hand-off',
        description: 'Validated with UX researchers and developers. Proposed visual refresh using Fluent Web library.'
      }
    ],
    solution: 'A streamlined Cloud Apps experience within Windows 365 that simplifies app provisioning and management. Key features include simplified app selection from existing Intune apps, unified provisioning policy creation, and a modernized UI built on Fluent Web design library. The solution integrates seamlessly into the existing Windows 365 admin experience.',
    outcomes: [
      {
        metric: 'Management',
        value: 'Simplified',
        description: 'Streamlined app provisioning workflow for IT administrators'
      },
      {
        metric: 'App Selection',
        value: 'Unified',
        description: 'Consistent experience across all app types in Windows 365'
      },
      {
        metric: 'Visual Design',
        value: 'Modernized',
        description: 'Updated UI using Fluent Web design library'
      }
    ],
    images: [
      {
        url: '/images/projects/windows-365/screen-1.jpg',
        alt: 'Cloud Apps provisioning policy',
        caption: 'Simplified app selection and provisioning workflow'
      },
      {
        url: '/images/projects/windows-365/screen-2.jpg',
        alt: 'Modernized Cloud Apps interface',
        caption: 'Visual refresh with Fluent Web design library'
      }
    ],
    designDetails: [
      {
        title: 'Setup - Step 1 | Introduce Cloud App configuration option in existing workflow',
        phase: 'final',
        image: '/images/projects/windows-365/design-setup-final.jpg',
        alt: 'Setup step 1 showing Cloud App configuration in existing workflow',
        insights: ['What worked well: Concept and order of fields', 'Recommendation: Clarify content'],
        updates: ['Clear content through content reviews']
      },
      {
        title: 'Access | Assignment of Cloud Apps to user groups - Exploration',
        phase: 'exploration',
        image: '/images/projects/windows-365/design-access-exploration.jpg',
        alt: 'Three workflow options for assigning Cloud Apps to user groups',
        insights: ['Explored three workflows: One app → One user group, All apps → One user group, Two tier approach']
      },
      {
        title: 'Access | Workshop with stakeholders to analyze workflows',
        phase: 'exploration',
        image: '/images/projects/windows-365/design-access-workshop.jpg',
        alt: 'Stakeholder workshop analyzing workflow options with pros and cons',
        insights: ['Conducted workshops to evaluate different workflow approaches', 'Analyzed pros and cons of each option with stakeholder input']
      },
      {
        title: 'Access | Assignment of Cloud Apps to user groups - Final Design',
        phase: 'final',
        image: '/images/projects/windows-365/design-access-final.jpg',
        alt: 'Final design for Cloud Apps assignment to user groups',
        insights: ['What worked well: All apps → One user group', 'What worked well: Users liked the option to adopt existing workflow'],
        updates: ['Integrated with the existing setup', 'No change required in existing flow']
      },
      {
        title: 'Manage | Entry point for list of Cloud Apps - Exploration',
        phase: 'exploration',
        image: '/images/projects/windows-365/design-manage-exploration.jpg',
        alt: 'Exploration of different entry points for Cloud Apps list',
        insights: ['Explored multiple navigation entry points', 'Evaluated different information hierarchies']
      },
      {
        title: 'Manage | Entry point for list of Cloud Apps - Final Design',
        phase: 'final',
        image: '/images/projects/windows-365/design-manage-final.jpg',
        alt: 'Final design for Cloud Apps list entry point with customized data grid',
        insights: ['No clear result: 50-50 split between entry point of Cloud Apps', 'Recommendation: Add more columns'],
        updates: ['Customized Intune data grid', 'Content review for additional columns']
      },
      {
        title: 'Manage | Key action and statuses',
        phase: 'final',
        image: '/images/projects/windows-365/design-manage-actions.jpg',
        alt: 'Key actions and statuses in Cloud Apps management interface',
        updates: ['Publish as an extra step', 'Some columns were technically not feasible to implement']
      }
    ],
    tags: ['Windows 365', 'Cloud Apps', 'Enterprise SaaS', 'Fluent Design', 'IT Admin Experience']
  },
  {
    id: '2',
    slug: 'windows-365-reserve',
    title: 'Windows 365 Reserve',
    subtitle: 'Proactive monitoring for enterprise desktop infrastructure',
    category: 'Product',
    heroImage: '/images/projects/avd/hero.jpg',
    thumbnail: '/images/projects/avd/thumbnail.jpg',
    year: 2022,
    client: 'Microsoft',
    duration: '4 months',
    role: 'Senior Product Designer',
    overview: 'Designed a comprehensive monitoring dashboard for Azure Virtual Desktop (AVD) that provides IT administrators with real-time insights into desktop health, user experience, and infrastructure performance across thousands of virtual machines.',
    challenge: 'IT admins managing large AVD deployments (10,000+ users) had no centralized view of system health. They relied on fragmented Azure Monitor logs and reactive support tickets. Research showed admins spent 15+ hours per week troubleshooting issues that could have been prevented.',
    process: [
      {
        title: 'User Research',
        description: 'Shadowed 12 IT admins managing AVD deployments. Analyzed 6 months of support data to identify common issues. Found that 68% of incidents were related to 5 core categories: connectivity, performance, authentication, application delivery, and capacity.'
      },
      {
        title: 'Information Architecture',
        description: 'Mapped out data hierarchy and visualization needs. Designed a three-tier system: Overview (fleet health), Diagnostics (issue investigation), and Trends (capacity planning). Prioritized based on frequency and impact.'
      },
      {
        title: 'Data Visualization',
        description: 'Created custom chart patterns for time-series data, topology views, and alert prioritization. Worked with data scientists to determine meaningful thresholds. Ensured WCAG AA compliance for all visualizations.'
      },
      {
        title: 'Pilot & Iteration',
        description: 'Launched private preview with 50 enterprise customers. Gathered feedback through in-app surveys and monthly calls. Iterated on alert logic and dashboard customization based on real-world usage.'
      }
    ],
    solution: 'An AI-powered dashboard that surfaces actionable insights, predicts potential issues, and provides guided remediation. Includes customizable views, automated alerting, and integration with ServiceNow for ticket creation.',
    outcomes: [
      {
        metric: 'MTTR',
        value: '-70%',
        description: 'Mean time to resolution for incidents decreased from 3.2 hours to 58 minutes'
      },
      {
        metric: 'Proactive Resolution',
        value: '45%',
        description: 'Of issues resolved before user impact, based on predictive alerts'
      },
      {
        metric: 'Admin Efficiency',
        value: '+12 hrs/week',
        description: 'Time saved per admin on monitoring and troubleshooting tasks'
      }
    ],
    images: [
      {
        url: '/images/projects/avd/screen-1.jpg',
        alt: 'AVD monitoring dashboard',
        caption: 'Real-time insights into desktop health and performance'
      },
      {
        url: '/images/projects/avd/screen-2.jpg',
        alt: 'Alert diagnostics',
        caption: 'Guided remediation for common issues'
      }
    ],
    tags: ['Azure Virtual Desktop', 'Data Visualization', 'Dashboards', 'Enterprise IT']
  },
  {
    id: '3',
    slug: 'fluent-design-contribution',
    title: 'Fluent Design System: Enterprise Patterns',
    subtitle: 'Building scalable components for complex enterprise workflows',
    category: 'UI',
    heroImage: '/images/projects/fluent/hero.jpg',
    thumbnail: '/images/projects/fluent/thumbnail.jpg',
    year: 2021,
    client: 'Microsoft',
    duration: '8 months (ongoing)',
    role: 'Design Systems Contributor',
    overview: 'Led the creation of enterprise-specific components and patterns for Microsoft Fluent Design System, enabling consistent experiences across Azure, Microsoft 365, and Windows products. Focus on complex data tables, multi-step workflows, and admin configurations.',
    challenge: 'Microsoft\'s consumer-focused Fluent components didn\'t address enterprise needs: complex data tables with 50+ columns, multi-tenant scenarios, bulk operations, and compliance requirements. Product teams were building custom solutions, creating inconsistency.',
    process: [
      {
        title: 'Research & Audit',
        description: 'Conducted audit across 15 Azure and M365 products. Identified 30+ common patterns being implemented inconsistently. Interviewed designers and engineers to understand pain points and requirements.'
      },
      {
        title: 'Component Design',
        description: 'Designed 12 enterprise components: advanced data table, command palette, bulk action panel, role-based access controls, and more. Each with variants, states, and comprehensive documentation.'
      },
      {
        title: 'Documentation & Advocacy',
        description: 'Created Figma libraries, code examples, and accessibility guidelines. Presented at Microsoft Design Week. Mentored 20+ designers on implementation.'
      },
      {
        title: 'Adoption & Iteration',
        description: 'Tracked adoption across products. Gathered feedback through office hours and GitHub. Iterated based on real-world usage and edge cases discovered by teams.'
      }
    ],
    solution: 'A comprehensive library of enterprise patterns with Figma components, React code, and detailed guidelines. Includes responsive behaviors, keyboard navigation, and screen reader support. Published to Microsoft internal design system.',
    outcomes: [
      {
        metric: 'Adoption',
        value: '40+ products',
        description: 'Components used across Azure, M365, and Windows products'
      },
      {
        metric: 'Design Time',
        value: '-65%',
        description: 'Reduction in time to design complex enterprise flows'
      },
      {
        metric: 'Consistency',
        value: '92%',
        description: 'Pattern consistency score across adopting products'
      }
    ],
    images: [
      {
        url: '/images/projects/fluent/screen-1.jpg',
        alt: 'Fluent enterprise components',
        caption: 'Enterprise component library in Figma'
      },
      {
        url: '/images/projects/fluent/screen-2.jpg',
        alt: 'Component documentation',
        caption: 'Comprehensive usage guidelines and examples'
      }
    ],
    tags: ['Design Systems', 'Fluent Design', 'Component Library', 'Enterprise Patterns']
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category)
}
