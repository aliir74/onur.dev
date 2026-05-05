import { ArrowUpRightIcon } from 'lucide-react'

import { PROJECTS } from '@/lib/projects'

export function ProjectsList({ featuredOnly = false } = {}) {
  const projects = featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS

  if (projects.length === 0) {
    return <p className="text-gray-500">No projects yet. Check back soon.</p>
  }

  return (
    <ul className="flex flex-col">
      {projects.map((project) => (
        <li key={project.slug}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-4 first:border-t hover:text-blue-600"
          >
            <span className="flex flex-1 flex-col gap-1">
              <span className="flex items-baseline gap-2">
                <span className="text-base font-semibold">{project.title}</span>
                <ArrowUpRightIcon size={14} className="self-center text-gray-400" />
              </span>
              {project.description ? <span className="text-sm text-gray-500">{project.description}</span> : null}
            </span>
            {project.tech && project.tech.length > 0 ? (
              <span className="hidden shrink-0 font-mono text-xs text-gray-400 sm:block">
                {project.tech.join(' · ')}
              </span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  )
}
