import { useState } from 'react'

// Uses /logo.png when present (drop the official logo into /public), otherwise an SVG recreation.
export function LogoMark({ className = 'h-14 w-14' }) {
  const [failed, setFailed] = useState(false)
  if (!failed) {
    return (
      <img
        src="/logo.png"
        alt="Brew Lounge by Zoe"
        className={`${className} rounded-full object-cover`}
        onError={() => setFailed(true)}
      />
    )
  }
  return (
    <svg viewBox="0 0 120 120" className={className} aria-label="Brew Lounge by Zoe">
      <circle cx="60" cy="60" r="56" fill="#F5EFE6" stroke="#5A3620" strokeWidth="3" />
      <path d="M44 38c-5-6 5-9 0-16M54 38c-5-6 5-9 0-16M64 38c-5-6 5-9 0-16" fill="none" stroke="#5A3620" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 46c18-4 40-4 58 2" fill="none" stroke="#9DBB7E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 50h52c0 18-11 30-26 30S32 68 32 50z" fill="#5A3620" />
      <path d="M84 55c11-2 12 12-1 15" fill="none" stroke="#9DBB7E" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 84c16 4 32 4 48 0" fill="none" stroke="#5A3620" strokeWidth="2" strokeLinecap="round" />
      <text x="60" y="101" textAnchor="middle" fontFamily="Kaushan Script, cursive" fontSize="13" fill="#5A3620">Brew lounge</text>
    </svg>
  )
}

export function Wordmark({ light = false }) {
  return (
    <div className="leading-none">
      <span className={`font-script text-2xl ${light ? 'text-cream-50' : 'text-coffee-600'}`}>Brew lounge</span>
      <span className="ml-1 block text-right font-script text-sm text-sage-500">by Zoe</span>
    </div>
  )
}
