import { useState } from 'react'

function Franchise() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: '',
    experience: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, this would send to backend
    alert('Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      budget: '',
      experience: '',
    })
  }

  const benefits = [
    {
      icon: '🏆',
      title: 'Brand yang Sudah Dikenal',
      desc: '200+ outlet, jutaan followers di social media, dan brand awareness yang tinggi.',
    },
    {
      icon: '💰',
      title: 'Modal Terjangkau',
      desc: 'Mulai dari 50 juta all-in. Lebih terjangkau dibanding franchise minuman lain.',
    },
    {
      icon: '⚡',
      title: 'Balik Modal Cepat',
      desc: 'Rata-rata 6-12 bulan balik modal. Banyak mitra yang balik modal kurang dari 6 bulan!',
    },
    {
      icon: '🤝',
      title: 'Support Penuh',
      desc: 'Training, supply chain, marketing support, dan tim yang siap membantu 24/7.',
    },
  ]

  const packages = [
    {
      name: 'Paket Booth',
      price: 'Rp 50.000.000',
      icon: '🏪',
      color: 'bg-sunny-yellow',
      suitable: 'Mall, foodcourt, area kampus',
      includes: [
        'Booth custom design',
        'Peralatan lengkap',
        'Bahan baku awal 1 bulan',
        'Training 1 minggu',
        'Seragam 4 set',
        'Marketing kit',
      ],
      royalty: '3% dari omzet',
      popular: false,
    },
    {
      name: 'Paket Mini Outlet',
      price: 'Rp 100.000.000',
      icon: '🏠',
      color: 'bg-tea-orange',
      suitable: 'Ruko kecil, area ramai',
      includes: [
        'Full interior setup',
        'Peralatan premium',
        'Bahan baku awal 2 bulan',
        'Training 2 minggu',
        'Seragam 6 set',
        'Marketing kit + Grand opening',
        'Menu board digital',
      ],
      royalty: '3% dari omzet',
      popular: true,
    },
    {
      name: 'Paket Full Outlet',
      price: 'Rp 200.000.000',
      icon: '🏢',
      color: 'bg-fresh-green',
      suitable: 'Standalone store dengan seating',
      includes: [
        'Full renovation',
        'Peralatan premium lengkap',
        'Bahan baku awal 3 bulan',
        'Training 1 bulan',
        'Seragam 10 set',
        'Grand opening support',
        'Menu board digital',
        'Outdoor signage',
        'POS system',
      ],
      royalty: '3% dari omzet',
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: 'Andi Pratama',
      location: 'Franchisee Bandung',
      outlets: 3,
      quote: 'Buka outlet pertama di Bandung, 8 bulan udah balik modal. Sekarang punya 3 outlet! Support dari pusat luar biasa.',
      emoji: '👨‍💼',
    },
    {
      name: 'Dewi Susanti',
      location: 'Franchisee Surabaya',
      outlets: 2,
      quote: 'Awalnya ragu karena belum pernah bisnis F&B. Tapi dengan training dan support dari Teh Santai, sekarang omzet stabil 100jt/bulan!',
      emoji: '👩‍💼',
    },
    {
      name: 'Rizky Firmansyah',
      location: 'Franchisee Yogyakarta',
      outlets: 5,
      quote: 'Brand awareness Teh Santai udah tinggi, jadi gak perlu effort besar buat marketing. Fokus ke operasional aja, customer datang sendiri.',
      emoji: '👨‍🍳',
    },
  ]

  const steps = [
    { step: 1, title: 'Isi Form', desc: 'Lengkapi form minat di bawah', icon: '📝' },
    { step: 2, title: 'Presentasi', desc: 'Tim kami hubungi untuk presentasi', icon: '📊' },
    { step: 3, title: 'Survey Lokasi', desc: 'Kami bantu survey lokasi terbaik', icon: '📍' },
    { step: 4, title: 'Deal & Setup', desc: 'Tanda tangan kontrak dan setup outlet', icon: '✍️' },
    { step: 5, title: 'Training', desc: 'Training intensif untuk tim kamu', icon: '📚' },
    { step: 6, title: 'Grand Opening', desc: 'Pembukaan dengan marketing support', icon: '🎉' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-warm-cream via-sunny-yellow-light/30 to-warm-cream overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 text-6xl animate-float opacity-20">🚀</div>
          <div className="absolute bottom-10 left-10 text-5xl animate-bounce-slow opacity-20">💼</div>
          <div className="absolute top-1/2 left-1/4 text-4xl animate-float opacity-10">💰</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-fresh-green/10 text-fresh-green font-bold px-4 py-2 rounded-full text-sm mb-6">
            🤝 200+ Mitra Sukses
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Gabung Jadi Partner <br />
            <span className="text-tea-orange">Teh Santai!</span> 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Bisnis minuman paling santai, profit paling real.
            <br />
            <span className="text-tea-orange font-bold">Mulai dari 50 juta, balik modal cepat!</span>
          </p>
          <a
            href="#form"
            className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center space-x-2"
          >
            <span>Daftar Sekarang</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* Why Franchise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Franchise Teh Santai? 🤔
            </h2>
            <p className="text-gray-600 text-lg">Ini yang bikin mitra kami sukses!</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-warm-cream rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-16 md:py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilihan Paket Investasi 💼
            </h2>
            <p className="text-gray-600 text-lg">Pilih sesuai budget dan lokasi kamu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden card-hover ${
                  pkg.popular ? 'ring-4 ring-tea-orange' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-tea-orange text-white text-center py-2 text-sm font-bold">
                    🔥 MOST POPULAR
                  </div>
                )}

                <div className={`${pkg.color} p-6 text-white text-center ${pkg.popular ? 'mt-8' : ''}`}>
                  <span className="text-5xl">{pkg.icon}</span>
                  <h3 className="font-heading text-2xl font-bold mt-4">{pkg.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{pkg.suitable}</p>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="font-heading text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <p className="text-gray-500 text-sm mt-1">Royalty: {pkg.royalty}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                        <span className="text-fresh-green">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#form"
                    className={`block w-full py-3 rounded-full font-bold text-center transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-tea-orange hover:bg-tea-orange-dark text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Pilih Paket Ini
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-tea-orange to-tea-orange-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Cerita Sukses Mitra 🌟
            </h2>
            <p className="text-white/80 text-lg">Mereka sudah membuktikan!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{testimonial.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-white/70 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-1">
                  <span className="text-sunny-yellow">🏪</span>
                  <span className="text-sm text-sunny-yellow font-bold">{testimonial.outlets} Outlet</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Bergabung 📋
            </h2>
            <p className="text-gray-600 text-lg">6 langkah mudah jadi mitra Teh Santai</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-warm-cream rounded-2xl p-6 text-center card-hover"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-tea-orange text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {step.step}
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section id="form" className="py-16 md:py-24 bg-warm-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Form Pendaftaran 📝
            </h2>
            <p className="text-gray-600 text-lg">
              Isi form di bawah, tim kami akan menghubungi dalam 1x24 jam!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none transition-colors"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    No. HP / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none transition-colors"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Kota yang Diminati *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none transition-colors"
                  placeholder="Contoh: Jakarta, Bandung"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Investasi *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none transition-colors"
                >
                  <option value="">Pilih budget</option>
                  <option value="50-100jt">Rp 50 - 100 Juta (Paket Booth)</option>
                  <option value="100-150jt">Rp 100 - 150 Juta (Paket Mini Outlet)</option>
                  <option value="150-200jt">Rp 150 - 200 Juta (Paket Full Outlet)</option>
                  <option value="200jt+">Di atas Rp 200 Juta</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pengalaman Bisnis (Optional)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-tea-orange focus:outline-none transition-colors resize-none"
                  placeholder="Ceritakan pengalaman bisnis Anda (jika ada)"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-tea-orange hover:bg-tea-orange-dark text-white font-bold py-4 rounded-xl text-lg transition-all duration-200 btn-hover-scale flex items-center justify-center space-x-2"
              >
                <span>Kirim & Jadwalkan Presentasi</span>
                <span>🚀</span>
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Dengan mengirim form ini, Anda menyetujui untuk dihubungi oleh tim Teh Santai
          </p>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Masih ada pertanyaan? 💬
          </h2>
          <p className="text-gray-600 mb-6">
            Hubungi tim franchise kami langsung untuk konsultasi gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fresh-green hover:bg-fresh-green-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 btn-hover-scale inline-flex items-center justify-center space-x-2"
            >
              <span>WhatsApp Franchise</span>
              <span className="text-xl">💬</span>
            </a>
            <a
              href="mailto:franchise@tehsantai.id"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Email</span>
              <span className="text-xl">✉️</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Franchise
