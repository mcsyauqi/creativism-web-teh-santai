import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/locations', label: 'Outlet' },
    { path: '/franchise', label: 'Franchise' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: '📸', label: 'Instagram', url: 'https://instagram.com/tehsantai.id' },
    { icon: '🎵', label: 'TikTok', url: 'https://tiktok.com/@tehsantai.id' },
    { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/tehsantai_id' },
    { icon: '📘', label: 'Facebook', url: 'https://facebook.com/tehsantai.id' },
  ]

  return (
    <footer className="bg-tea-orange-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🍵</span>
              <div>
                <h3 className="font-heading font-bold text-2xl">Teh Santai</h3>
                <p className="text-tea-orange-light text-sm">Santai Dulu, Teh Dulu!</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Es teh segar dengan daun teh pilihan, manis pas, dan harga ramah kantong.
              Teman santai kamu setiap hari!
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>Jl. Margonda Raya No. 100<br />Depok, Jawa Barat 16424</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>0812-TEH-SANTAI</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>hello@tehsantai.id</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>⏰</span>
                <span>Setiap hari 08:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Stay Updated!</h4>
            <p className="text-white/80 text-sm mb-4">
              Dapetin info promo dan menu baru duluan!
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email kamu..."
                className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-sunny-yellow hover:bg-sunny-yellow-light text-tea-orange-dark font-bold py-2.5 rounded-full transition-all duration-200 btn-hover-scale text-sm"
              >
                Subscribe 🔔
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Teh Santai. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center space-x-1">
              <span>Created with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>by</span>
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunny-yellow hover:text-sunny-yellow-light font-semibold transition-colors"
              >
                Creativism
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
