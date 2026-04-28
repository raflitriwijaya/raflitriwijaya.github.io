import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Zap } from 'lucide-react'
import config from '../config'
import useGitHubRepos from '../hooks/useGitHubRepos'

function SkeletonCard() {
  return (
    <div className="card h-56 flex flex-col justify-between">
      <div>
        <div className="skeleton h-5 w-2/3 mb-3" />
        <div className="skeleton h-3 w-full mb-2" />
        <div className="skeleton h-3 w-4/5 mb-2" />
        <div className="skeleton h-3 w-3/5" />
      </div>
      <div className="flex gap-2">
        <div className="skeleton h-6 w-16 rounded-md" />
        <div className="skeleton h-6 w-20 rounded-md" />
      </div>
    </div>
  )
}

function StaticProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card flex flex-col h-full"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="flex items-center gap-1 mb-3">
          <Zap size={12} style={{ color: 'var(--color-gold)' }} />
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--color-gold)', fontFamily: 'JetBrains Mono, monospace' }}
          >
            Featured
          </span>
        </div>
      )}

      <h3
        className="text-base font-bold mb-2 leading-snug"
        style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
      >
        {project.title}
      </h3>

      {project.period && (
        <p
          className="text-xs mb-3 font-mono"
          style={{ color: 'var(--color-muted)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {project.period}
        </p>
      )}

      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--color-muted)' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="tag text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 flex-wrap">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-3 py-1.5">
            <Github size={13} /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-3 py-1.5">
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
        {!project.githubUrl && !project.liveUrl && (
          <span
            className="text-xs font-mono px-3 py-1.5 rounded-lg"
            style={{
              color: 'var(--color-muted)',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--color-border)',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Private / Field Project
          </span>
        )}
      </div>
    </motion.div>
  )
}

function GitHubRepoCard({ repo, index, offset, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index + offset) * 0.08 }}
      className="card flex flex-col h-full"
    >
      {/* GitHub badge */}
      <div className="flex items-center gap-1.5 mb-3">
        <Github size={13} style={{ color: 'var(--color-muted)' }} />
        <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
          GitHub
        </span>
        <div className="flex items-center gap-1 ml-auto">
          <Star size={12} style={{ color: 'var(--color-gold)' }} />
          <span className="text-xs font-mono" style={{ color: 'var(--color-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            {repo.stargazers_count}
          </span>
          <GitFork size={12} className="ml-2" style={{ color: 'var(--color-muted)' }} />
          <span className="text-xs font-mono" style={{ color: 'var(--color-muted)', fontFamily: 'JetBrains Mono, monospace' }}>
            {repo.forks_count}
          </span>
        </div>
      </div>

      <h3
        className="text-base font-bold mb-2 leading-snug"
        style={{ fontFamily: 'Syne, sans-serif', color: 'var(--color-text)' }}
      >
        {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
      </h3>

      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--color-muted)' }}>
        {repo.description || 'No description provided.'}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 5).map((topic) => (
            <span key={topic} className="tag text-xs">
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Language badge */}
      {repo.language && (
        <div className="mb-4">
          <span
            className="text-xs font-mono px-2 py-0.5 rounded"
            style={{
              color: 'var(--color-gold)',
              backgroundColor: 'rgba(251,191,36,0.08)',
              border: '1px solid rgba(251,191,36,0.15)',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {repo.language}
          </span>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-2 flex-wrap">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-3 py-1.5">
          <Github size={13} /> GitHub Repo
        </a>
        {repo.homepage ? (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-3 py-1.5">
            <ExternalLink size={13} /> Live Demo
          </a>
        ) : null}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { repos, loading, error } = useGitHubRepos(config.githubUsername, {
    maxRepos: config.maxRepos,
    excludedRepos: config.excludedRepos,
    filterByTopic: config.filterByTopic,
  })

  return (
    <section id="projects" className="py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-subtitle">03 / Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <div className="glow-line w-16 mt-3" />
          <p className="mt-4 text-sm" style={{ color: 'var(--color-muted)' }}>
            A mix of embedded systems, IoT deployments, and software projects — from lab bench to field deployment.
          </p>
        </motion.div>

        {/* Static projects */}
        <div className="mb-12">
          <div
            className="flex items-center gap-3 mb-6"
          >
            <Zap size={14} style={{ color: 'var(--color-gold)' }} />
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: 'var(--color-gold)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              Featured Projects
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(251,191,36,0.12)' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.staticProjects.map((project, i) => (
              <StaticProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* GitHub repos */}
        {(loading || repos.length > 0 || error) && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Github size={14} style={{ color: 'var(--color-cyan)' }} />
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: 'var(--color-cyan)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                From GitHub — {config.githubUsername}
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border)' }} />
            </div>

            {error && (
              <div
                className="text-sm p-4 rounded-lg"
                style={{
                  backgroundColor: 'rgba(239,68,68,0.06)',
                  border: '1px solid rgba(239,68,68,0.15)',
                  color: 'rgba(239,68,68,0.8)',
                }}
              >
                Could not fetch GitHub repositories. Please update your GitHub username in config.js.
              </div>
            )}

            {loading && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            )}

            {!loading && !error && repos.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {repos.map((repo, i) => (
                  <GitHubRepoCard
                    key={repo.id}
                    repo={repo}
                    index={i}
                    offset={config.staticProjects.length}
                    inView={inView}
                  />
                ))}
              </div>
            )}

            {!loading && !error && repos.length === 0 && config.githubUsername !== 'raflitriwijaya' && (
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                No public repositories found. Make sure your GitHub username is correct in config.js.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
