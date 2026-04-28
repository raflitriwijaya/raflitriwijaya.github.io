import { useState, useEffect } from 'react'

export default function useGitHubRepos(username, { maxRepos = 6, excludedRepos = [], filterByTopic = 'portfolio' } = {}) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!username || username === 'raflitriwijaya') {
      // If placeholder username, return empty gracefully so static projects still show
      setLoading(false)
      return
    }

    const fetchRepos = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
          {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }
        )

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)

        const data = await res.json()

        // Filter: non-fork, non-archived, not excluded
        let filtered = data.filter(
          (r) =>
            !r.fork &&
            !r.archived &&
            !excludedRepos.includes(r.name)
        )

        // Prioritize repos with the portfolio topic
        const withTopic = filtered.filter((r) =>
          r.topics && r.topics.includes(filterByTopic)
        )
        const withoutTopic = filtered.filter(
          (r) => !r.topics || !r.topics.includes(filterByTopic)
        )

        // Portfolio-tagged first, then most recently updated
        filtered = [...withTopic, ...withoutTopic].slice(0, maxRepos)

        setRepos(filtered)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username, maxRepos, excludedRepos, filterByTopic])

  return { repos, loading, error }
}
