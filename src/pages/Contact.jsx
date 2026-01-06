import { Link } from 'react-router-dom'

function Contact() {
  const contactOptions = [
    { icon: '📸', title: 'Instagram DM', subtitle: '@tehsantai.id', desc: 'Response tercepat! Dibalas dalam 1 jam.', link: 'https://instagram.com/tehsantai.id', bgColor: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)', badge: 'Fastest' },
    { icon: '💬', title: 'WhatsApp', subtitle: '0812-TEH-SANTAI', desc: 'Chat langsung dengan CS kami.', link: 'https://wa.me/6281283426824', bgColor: '#25D366', badge: null },
    { icon: '✉️', title: 'Email', subtitle: 'hello@tehsantai.id', desc: 'Untuk pertanyaan formal.', link: 'mailto:hello@tehsantai.id', bgColor: '#EA580C', badge: null },
  ]

  const departments = [
    { icon: '🎧', title: 'Customer Service', desc: 'Pertanyaan umum & feedback', email: 'cs@tehsantai.id' },
    { icon: '💼', title: 'Franchise', desc: 'Info & pendaftaran franchise', email: 'franchise@tehsantai.id' },
    { icon: '🤝', title: 'Partnership', desc: 'Kerjasama & sponsorship', email: 'marketing@tehsantai.id' },
    { icon: '👔', title: 'Careers', desc: 'Lowongan kerja & magang', email: 'careers@tehsantai.id' },
  ]

  const socialLinks = [
    { icon: '📸', name: 'Instagram', followers: '1.2M', link: 'https://instagram.com/tehsantai.id', bgColor: 'linear-gradient(135deg, #833AB4, #E1306C)' },
    { icon: '🎵', name: 'TikTok', followers: '800K', link: 'https://tiktok.com/@tehsantai.id', bgColor: '#000' },
    { icon: '🐦', name: 'Twitter', followers: '150K', link: 'https://twitter.com/tehsantai_id', bgColor: '#1DA1F2' },
    { icon: '📘', name: 'Facebook', followers: '500K', link: 'https://facebook.com/tehsantai.id', bgColor: '#1877F2' },
    { icon: '📺', name: 'YouTube', followers: '100K', link: 'https://youtube.com/@tehsantai', bgColor: '#FF0000' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">💬</div>
          <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-bounce-slow">📞</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow">👋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-tea-orange">Teh Santai</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan, feedback, atau mau ngobrol? Kami siap membantu!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Cara Menghubungi Kami 📱</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((opt, i) => (
              <a key={i} href={opt.link} target="_blank" rel="noopener noreferrer" className="relative bg-white rounded-2xl overflow-hidden card-hover border-2 border-gray-100 group">
                {opt.badge && <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">⚡ {opt.badge}</div>}
                <div className="p-6 text-white text-center" style={{ background: opt.bgColor }}>
                  <span className="text-5xl">{opt.icon}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{opt.title}</h3>
                  <p className="text-tea-orange font-semibold mb-2">{opt.subtitle}</p>
                  <p className="text-gray-600 text-sm">{opt.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Kontak per Departemen 🏢</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {departments.map((dept, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-hover shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{dept.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{dept.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{dept.desc}</p>
                    <a href={`mailto:${dept.email}`} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors inline-block">
                      ✉️ {dept.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kantor Pusat 🏠</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p>Jl. Margonda Raya No. 100, Depok<br />Jawa Barat 16424, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-gray-900">Jam Operasional</p>
                    <p>Senin - Jumat: 09:00 - 18:00<br />Sabtu: 09:00 - 15:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p>(021) 7878-8888</p>
                  </div>
                </div>
              </div>
              <a href="https://maps.google.com/maps?q=Jl.+Margonda+Raya+Depok" target="_blank" rel="noopener noreferrer" className="mt-6 bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all btn-hover-scale">
                <span>Lihat di Maps</span><span>🗺️</span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl h-80 flex items-center justify-center border-2 border-dashed border-green-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Map Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Follow Kami! 📲</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="rounded-2xl p-4 text-center card-hover text-white" style={{ background: s.bgColor }}>
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-bold mt-2 text-sm">{s.name}</h3>
                <p className="text-white/80 text-xs mt-1">{s.followers}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">FAQ ❓</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              { q: 'Bagaimana cara order delivery?', a: 'Via GoFood, GrabFood, atau ShopeeFood.' },
              { q: 'Bisa request less sugar?', a: 'Tentu! Semua minuman bisa di-custom gratis.' },
              { q: 'Berapa lama proses franchise?', a: '1-2 bulan dari pendaftaran sampai opening.' },
              { q: 'Ada menu seasonal?', a: 'Ada! Follow Instagram untuk update terbaru.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 card-hover shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
