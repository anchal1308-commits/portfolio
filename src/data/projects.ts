import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'windows-365-cloud-apps',
    title: 'Windows 365 Cloud Apps',
    subtitle: 'Reducing IT admin onboarding time by 60%',
    category: 'Product',
    heroImage: '/images/projects/windows-365/hero.jpg',
    thumbnail: '/images/projects/windows-365/thumbnail.jpg',
    year: 2023,
    client: 'Microsoft',
    duration: '6 months',
    role: 'Lead Product Designer',
    overview: 'Redesigned the Windows 365 initial setup flow for IT administrators, transforming a complex 20-step configuration process into a guided 5-step experience. The goal was to reduce time-to-first-Cloud-PC while maintaining enterprise-grade security and customization.',
    challenge: 'Windows 365 setup required IT admins to configure network settings, Azure AD groups, licensing, and security policies across multiple Azure portals. Research showed 73% of admins abandoned setup before completing it, and average completion time was 4+ hours for first-time users.',
    process: [
      {
        title: 'Discovery & Research',
        description: 'Conducted 30+ interviews with IT administrators across enterprise customers (Fortune 500). Analyzed telemetry data showing drop-off points. Created journey maps identifying pain points in Azure portal navigation, unclear prerequisites, and overwhelming configuration options.'
      },
      {
        title: 'Design Principles',
        description: 'Established three core principles: Progressive Disclosure (show only what\'s needed now), Intelligent Defaults (reduce decisions), and Contextual Guidance (educate as users configure). These became foundational for the redesign.'
      },
      {
        title: 'Prototyping & Testing',
        description: 'Built interactive prototypes with Microsoft Fluent components. Ran 5 rounds of usability testing with IT admins. Iterated based on task completion rates and qualitative feedback. Validated with both SMB and enterprise customers.'
      },
      {
        title: 'Collaboration & Launch',
        description: 'Worked closely with Azure engineering teams to ensure technical feasibility. Partnered with content design for in-product guidance. Coordinated with Windows 365 PM for feature prioritization and GA release.'
      }
    ],
    solution: 'A streamlined setup wizard with intelligent defaults, progressive disclosure, and contextual help. Integrated Azure resource creation directly into the flow, eliminating portal-hopping. Added pre-flight checks to surface issues before deployment.',
    outcomes: [
      {
        metric: 'Setup Time',
        value: '-60%',
        description: 'Average setup time reduced from 4 hours to 90 minutes'
      },
      {
        metric: 'Completion Rate',
        value: '+85%',
        description: 'Setup completion rate increased from 27% to 95%'
      },
      {
        metric: 'Support Tickets',
        value: '-42%',
        description: 'Setup-related support tickets decreased significantly'
      }
    ],
    images: [
      {
        url: '/images/projects/windows-365/screen-1.jpg',
        alt: 'Windows 365 setup wizard',
        caption: 'Streamlined setup flow with intelligent defaults'
      },
      {
        url: '/images/projects/windows-365/screen-2.jpg',
        alt: 'Configuration preview',
        caption: 'Pre-flight validation before deployment'
      }
    ],
    tags: ['Enterprise SaaS', 'Azure', 'Windows 365', 'IT Admin Experience']
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
