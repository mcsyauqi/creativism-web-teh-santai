import { useState } from 'react'
import { Link } from 'react-router-dom'

function Franchise() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', city: '', budget: '', experience: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam.')
    setFormData({ name: '', phone: '', email: '', city: '', budget: '', experience: '' })
  }

  const benefits = [
    { icon: '🏆', title: 'Brand Dikenal', desc: '200+ outlet, jutaan followers di sosmed.' },
    { icon: '💰', title: 'Modal Terjangkau', desc: 'Mulai 50 juta all-in, lebih hemat.' },
    { icon: '⚡', title: 'Balik Modal Cepat', desc: 'Rata-rata 6-12 bulan balik modal.' },
    { icon: '🤝', title: 'Support Penuh', desc: 'Training, supply chain, marketing support.' },
  ]

  const packages = [
    { name: 'Paket Booth', price: 'Rp 50 Juta', icon: '🏪', bgColor: '#FBBF24', suitable: 'Mall, foodcourt, kampus', includes: ['Booth design', 'Equipment', 'Bahan 1 bulan', 'Training'], popular: false },
    { name: 'Paket Mini Outlet', price: 'Rp 100 Juta', icon: '🏠', bgColor: '#EA580C', suitable: 'Ruko kecil, area ramai', includes: ['Interior setup', 'Equipment premium', 'Bahan 2 bulan', 'Training + Opening'], popular: true },
    { name: 'Paket Full Outlet', price: 'Rp 200 Juta', icon: '🏢', bgColor: '#15803D', suitable: 'Standalone store + seating', includes: ['Full renovation', 'All equipment', 'Bahan 3 bulan', 'Grand opening'], popular: false },
  ]

  const testimonials = [
    { name: 'Andi Pratama', location: 'Bandung', outlets: 3, quote: '8 bulan udah balik modal. Sekarang punya 3 outlet!' },
    { name: 'Dewi Susanti', location: 'Surabaya', outlets: 2, quote: 'Omzet stabil 100jt/bulan berkat support tim!' },
  ]

  const steps = [
    { step: 1, title: 'Isi Form', icon: '📝' },
    { step: 2, title: 'Presentasi', icon: '📊' },
    { step: 3, title: 'Survey Lokasi', icon: '📍' },
    { step: 4, title: 'Deal & Setup', icon: '✍️' },
    { step: 5, title: 'Training', icon: '📚' },
    { step: 6, title: 'Grand Opening', icon: '🎉' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">🚀</div>
          <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-bounce-slow">💼</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm mb-6">🤝 200+ Mitra Sukses</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Gabung Jadi Partner <span className="text-tea-orange">Teh Santai!</span> 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Bisnis minuman paling santai, profit paling real. <span className="text-tea-orange font-bold">Mulai dari 50 juta!</span>
          </p>
          <a href="#form" className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all btn-hover-scale inline-flex items-center gap-2">
            <span>Daftar Sekarang</span><span>→</span>
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Kenapa Franchise Teh Santai? 🤔</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-amber-50 rounded-2xl p-6 text-center card-hover">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"><span className="text-3xl">{b.icon}</span></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Pilihan Paket Investasi 💼</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`relative bg-white rounded-2xl overflow-hidden card-hover ${pkg.popular ? 'ring-4 ring-tea-orange' : ''}`}>
                {pkg.popular && <div className="absolute top-0 left-0 right-0 bg-tea-orange text-white text-center py-2 text-sm font-bold">🔥 MOST POPULAR</div>}
                <div className="p-6 text-white text-center" style={{ backgroundColor: pkg.bgColor, marginTop: pkg.popular ? '32px' : 0 }}>
                  <span className="text-5xl">{pkg.icon}</span>
                  <h3 className="text-2xl font-bold mt-4">{pkg.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{pkg.suitable}</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <p className="text-gray-500 text-sm mt-1">Royalty: 3%</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-green-600">✓</span><span>{item}</span></li>
                    ))}
                  </ul>
                  <a href="#form" className={`block w-full py-3 rounded-full font-bold text-center transition-all ${pkg.popular ? 'bg-tea-orange hover:bg-tea-orange-dark text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>Pilih Paket</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cerita Sukses Mitra 🌟</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 card-hover">
                <p className="text-white/90 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><span className="text-2xl">👤</span></div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-white/70 text-sm">{t.location} • {t.outlets} Outlet</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Cara Bergabung 📋</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-amber-50 rounded-2xl p-4 text-center card-hover">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-tea-orange text-white rounded-full flex items-center justify-center text-sm font-bold">{s.step}</div>
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Form Pendaftaran 📝</h2>
          <p className="text-gray-600 text-center mb-8">Isi form, tim kami hubungi dalam 1x24 jam!</p>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none" placeholder="Nama lengkap" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">No. HP *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none" placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none" placeholder="email@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Kota yang Diminati *</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none" placeholder="Jakarta, Bandung, dll" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Investasi *</label>
              <select name="budget" value={formData.budget} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none">
                <option value="">Pilih budget</option>
                <option value="50-100jt">Rp 50 - 100 Juta</option>
                <option value="100-200jt">Rp 100 - 200 Juta</option>
                <option value="200jt+">Di atas Rp 200 Juta</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-tea-orange hover:bg-tea-orange-dark text-white font-bold py-4 rounded-xl text-lg transition-all btn-hover-scale flex items-center justify-center gap-2">
              <span>Kirim Pendaftaran</span><span>🚀</span>
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Masih ada pertanyaan? 💬</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all btn-hover-scale inline-flex items-center justify-center gap-2">
              <span>WhatsApp</span><span>💬</span>
            </a>
            <Link to="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2">
              <span>Contact Us</span><span>✉️</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Franchise
