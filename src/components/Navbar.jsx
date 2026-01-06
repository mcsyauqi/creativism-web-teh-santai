import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/locations', label: 'Outlet' },
    { path: '/franchise', label: 'Franchise' },
    { path: '/about', label: 'About' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-3xl">🍵</span>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-xl lg:text-2xl text-tea-orange">
                Teh Santai
              </span>
              <span className="text-[10px] text-gray-500 hidden sm:block">
                Santai Dulu, Teh Dulu!
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200
                  ${isActive(link.path)
                    ? 'bg-tea-orange text-white'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-tea-orange'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="https://gofood.link/tehsantai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fresh-green hover:bg-fresh-green-dark text-white font-bold px-6 py-2.5 rounded-full transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Order GoFood</span>
              <span>🛵</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[400px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-semibold text-center transition-all duration-200
                  ${isActive(link.path)
                    ? 'bg-tea-orange text-white'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-tea-orange'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://gofood.link/tehsantai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-fresh-green hover:bg-fresh-green-dark text-white font-bold px-4 py-3 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2 mt-2"
            >
              <span>Order GoFood</span>
              <span>🛵</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
