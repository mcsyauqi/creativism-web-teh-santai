function Contact() {
  const contactOptions = [
    {
      icon: '📸',
      title: 'Instagram DM',
      subtitle: '@tehsantai.id',
      desc: 'Response tercepat! Biasanya dibalas dalam 1 jam.',
      link: 'https://instagram.com/tehsantai.id',
      color: 'from-purple-500 to-pink-500',
      badge: 'Fastest',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      subtitle: '0812-TEH-SANTAI',
      desc: 'Chat langsung dengan customer service kami.',
      link: 'https://wa.me/6281283426824',
      color: 'from-green-500 to-green-600',
      badge: null,
    },
    {
      icon: '✉️',
      title: 'Email',
      subtitle: 'hello@tehsantai.id',
      desc: 'Untuk pertanyaan formal atau partnership.',
      link: 'mailto:hello@tehsantai.id',
      color: 'from-tea-orange to-tea-orange-dark',
      badge: null,
    },
  ]

  const departments = [
    {
      icon: '🎧',
      title: 'Customer Service',
      desc: 'Pertanyaan umum, keluhan, atau feedback',
      contact: 'wa.me/6281283426824',
      email: 'cs@tehsantai.id',
    },
    {
      icon: '💼',
      title: 'Franchise Inquiry',
      desc: 'Informasi dan pendaftaran franchise',
      contact: 'wa.me/6281283426825',
      email: 'franchise@tehsantai.id',
    },
    {
      icon: '🤝',
      title: 'Partnership & Collaboration',
      desc: 'Kerjasama, sponsorship, event',
      contact: 'wa.me/6281283426826',
      email: 'marketing@tehsantai.id',
    },
    {
      icon: '👔',
      title: 'Careers',
      desc: 'Lowongan kerja dan magang',
      contact: null,
      email: 'careers@tehsantai.id',
    },
  ]

  const socialLinks = [
    {
      icon: '📸',
      name: 'Instagram',
      handle: '@tehsantai.id',
      followers: '1.2M',
      link: 'https://instagram.com/tehsantai.id',
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
    },
    {
      icon: '🎵',
      name: 'TikTok',
      handle: '@tehsantai.id',
      followers: '800K',
      link: 'https://tiktok.com/@tehsantai.id',
      color: 'bg-black',
    },
    {
      icon: '🐦',
      name: 'Twitter',
      handle: '@tehsantai_id',
      followers: '150K',
      link: 'https://twitter.com/tehsantai_id',
      color: 'bg-blue-400',
    },
    {
      icon: '📘',
      name: 'Facebook',
      handle: 'Teh Santai Indonesia',
      followers: '500K',
      link: 'https://facebook.com/tehsantai.id',
      color: 'bg-blue-600',
    },
    {
      icon: '📺',
      name: 'YouTube',
      handle: 'Teh Santai',
      followers: '100K',
      link: 'https://youtube.com/@tehsantai',
      color: 'bg-red-600',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-warm-cream via-sunny-yellow-light/30 to-warm-cream overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 text-6xl animate-float opacity-20">💬</div>
          <div className="absolute bottom-10 left-10 text-5xl animate-bounce-slow opacity-20">📞</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow">👋</div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-tea-orange">Teh Santai</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan, feedback, atau mau ngobrol? Kami siap membantu!
          </p>
        </div>
      </section>

      {/* Main Contact Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Menghubungi Kami 📱
            </h2>
            <p className="text-gray-600 text-lg">Pilih channel yang paling nyaman buat kamu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-white rounded-2xl overflow-hidden card-hover border-2 border-gray-100 group"
              >
                {option.badge && (
                  <div className="absolute top-3 right-3 bg-fresh-green text-white text-xs font-bold px-2 py-1 rounded-full">
                    ⚡ {option.badge}
                  </div>
                )}
                <div className={`bg-gradient-to-br ${option.color} p-6 text-white text-center`}>
                  <span className="text-5xl">{option.icon}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{option.title}</h3>
                  <p className="text-tea-orange font-semibold mb-2">{option.subtitle}</p>
                  <p className="text-gray-600 text-sm">{option.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 md:py-24 bg-warm-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kontak per Departemen 🏢
            </h2>
            <p className="text-gray-600 text-lg">Langsung ke tim yang tepat!</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-warm-cream rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{dept.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">{dept.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{dept.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.contact && (
                        <a
                          href={`https://${dept.contact}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-fresh-green text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-fresh-green-dark transition-colors"
                        >
                          💬 WhatsApp
                        </a>
                      )}
                      <a
                        href={`mailto:${dept.email}`}
                        className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        ✉️ {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head Office */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kantor Pusat 🏠
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p>Jl. Margonda Raya No. 100, Depok</p>
                    <p>Jawa Barat 16424, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-gray-900">Jam Operasional</p>
                    <p>Senin - Jumat: 09:00 - 18:00 WIB</p>
                    <p>Sabtu: 09:00 - 15:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon Kantor</p>
                    <p>(021) 7878-8888</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/maps?q=Jl.+Margonda+Raya+No.+100+Depok"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-6 py-3 rounded-full inline-flex items-center space-x-2 transition-all duration-200 btn-hover-scale"
              >
                <span>Lihat di Maps</span>
                <span>🗺️</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-fresh-green/10 to-fresh-green/5 rounded-2xl h-80 flex items-center justify-center border-2 border-dashed border-fresh-green/30">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Map Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-tea-orange to-tea-orange-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Follow Kami! 📲
            </h2>
            <p className="text-white/80 text-lg">Stay updated dengan promo dan konten seru!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} rounded-2xl p-4 text-center card-hover text-white`}
              >
                <span className="text-3xl">{social.icon}</span>
                <h3 className="font-bold mt-2 text-sm">{social.name}</h3>
                <p className="text-white/80 text-xs mt-1">{social.followers} followers</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 md:py-24 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">❓</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Ditanya
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
            {[
              {
                q: 'Bagaimana cara order delivery?',
                a: 'Order via GoFood, GrabFood, atau ShopeeFood. Cari "Teh Santai" di app favorite kamu!',
              },
              {
                q: 'Apakah bisa request less sugar?',
                a: 'Tentu! Semua minuman bisa di-custom: less sugar, no ice, atau extra ice. Gratis!',
              },
              {
                q: 'Berapa lama proses franchise?',
                a: 'Dari pendaftaran hingga grand opening biasanya 1-2 bulan, tergantung kesiapan lokasi.',
              },
              {
                q: 'Apakah ada menu seasonal?',
                a: 'Ada! Follow Instagram kami untuk update menu seasonal dan promo terbaru.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-5 card-hover">
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
