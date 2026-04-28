import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ darkMode, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark/light mode"
      className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none"
      style={{
        backgroundColor: darkMode ? 'rgba(34,211,238,0.15)' : 'rgba(59,130,246,0.15)',
        border: `1px solid ${darkMode ? 'rgba(34,211,238,0.3)' : 'rgba(59,130,246,0.3)'}`,
      }}
    >
      <span
        className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          left: darkMode ? '2px' : 'calc(100% - 26px)',
          backgroundColor: darkMode ? 'rgba(34,211,238,0.9)' : 'rgba(59,130,246,0.9)',
          boxShadow: darkMode ? '0 0 8px rgba(34,211,238,0.5)' : '0 0 8px rgba(59,130,246,0.5)',
        }}
      >
        {darkMode ? (
          <Moon size={12} color="#070d1a" />
        ) : (
          <Sun size={12} color="#fff" />
        )}
      </span>
    </button>
  )
}
