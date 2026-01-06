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
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="text-2xl md:text-3xl">🍵</span>
              <span className="absolute -top-1 -right-1 text-xs animate-bounce-slow">✨</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl md:text-2xl text-tea-orange group-hover:text-tea-orange-dark transition-colors">
                Teh Santai
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 -mt-1 hidden sm:block">
                Santai Dulu, Teh Dulu!
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full font-body font-semibold text-sm transition-all duration-200
                  ${isActive(link.path)
                    ? 'bg-tea-orange text-white'
                    : 'text-gray-700 hover:bg-tea-orange/10 hover:text-tea-orange'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://gofood.link/tehsantai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fresh-green hover:bg-fresh-green-dark text-white font-body font-bold px-5 py-2.5 rounded-full transition-all duration-200 btn-hover-scale inline-flex items-center space-x-2"
            >
              <span>Order GoFood</span>
              <span className="text-lg">🛵</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-body font-semibold text-center transition-all duration-200
                  ${isActive(link.path)
                    ? 'bg-tea-orange text-white'
                    : 'text-gray-700 hover:bg-tea-orange/10 hover:text-tea-orange'
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
              className="bg-fresh-green hover:bg-fresh-green-dark text-white font-body font-bold px-4 py-3 rounded-xl transition-all duration-200 text-center flex items-center justify-center space-x-2"
            >
              <span>Order GoFood</span>
              <span className="text-lg">🛵</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
