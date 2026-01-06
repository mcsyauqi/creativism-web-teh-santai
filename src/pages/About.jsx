function About() {
  const milestones = [
    { year: '2019', title: 'Gerobak Pertama', desc: 'Mulai dari gerobak kecil di pinggir kampus UI Depok.', emoji: '🛒' },
    { year: '2020', title: 'Survive Pandemi', desc: '10 outlet! Tetap bertahan dengan inovasi delivery.', emoji: '💪' },
    { year: '2021', title: 'Viral TikTok', desc: '50 outlet dan video viral 10 juta views!', emoji: '📱' },
    { year: '2022', title: '100 Outlet', desc: 'Ekspansi ke Jawa, Bali, dan Sumatera.', emoji: '🎉' },
    { year: '2023', title: '200 Outlet', desc: 'Dari Medan sampai Makassar!', emoji: '🚀' },
    { year: '2024', title: 'Terus Berkembang', desc: 'Target 500 outlet dan Asia Tenggara!', emoji: '🌏' },
  ]

  const values = [
    { icon: '🍵', title: 'Keep It Real', desc: 'Teh asli, bukan abal-abal. Daun teh pilihan dari perkebunan terbaik.', bgColor: '#15803D' },
    { icon: '💰', title: 'Keep It Affordable', desc: 'Enak gak harus mahal! Kualitas premium, harga merakyat.', bgColor: '#EA580C' },
    { icon: '✨', title: 'Keep It Fun', desc: 'Suasana santai, vibes positif! Setiap cup adalah momen istirahat.', bgColor: '#FBBF24' },
  ]

  const founders = [
    { name: 'Budi Santoso', role: 'Co-Founder & CEO', bio: 'Mantan mahasiswa Teknik yang hobi bikin minuman.', emoji: '👨‍💼' },
    { name: 'Andi Wijaya', role: 'Co-Founder & COO', bio: 'Background F&B, jago urusan operasional.', emoji: '👨‍🍳' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">🍃</div>
          <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-bounce-slow">🍵</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6 animate-bounce-slow">🍃</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cerita <span className="text-tea-orange">Teh Santai</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Dari gerobak kecil di pinggir kampus, jadi 200+ outlet yang bikin jutaan orang bilang "Santai dulu, teh dulu!"
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[8rem] md:text-[10rem] animate-bounce-slow">🛒</div>
                  <p className="text-white text-2xl font-bold mt-4">Since 2019</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-2xl shadow-lg animate-float">
                <span className="text-3xl">🍵</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 p-4 rounded-2xl shadow-lg animate-bounce-slow">
                <span className="text-3xl">💪</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bermula dari Rasa Kesal... 😤
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p><span className="text-tea-orange font-bold">2019.</span> Dua mahasiswa lagi nongkrong di pinggir kampus. Haus, pengen beli minuman, eh harganya mahal semua.</p>
                <p>"Masa sih es teh doang harus 15 ribu? Kita bikin sendiri aja yang lebih murah tapi tetep enak!"</p>
                <p>Dengan modal seadanya, gerobak pinjaman, dan resep racikan sendiri, Teh Santai lahir di pinggir kampus UI Depok.</p>
                <p>Yang bikin beda? <span className="text-green-600 font-bold">Daun teh asli, bukan teh celup!</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami 💝</h2>
            <p className="text-gray-600 text-lg">Yang selalu kami pegang teguh sejak hari pertama</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center card-hover shadow-sm">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: value.bgColor }}>
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perjalanan Kami 🛤️</h2>
            <p className="text-gray-600 text-lg">Dari nol sampai 200+ outlet!</p>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4 bg-amber-50 rounded-2xl p-6 card-hover">
                <div className="flex-shrink-0 w-16 h-16 bg-tea-orange text-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{milestone.emoji}</span>
                </div>
                <div>
                  <div className="text-tea-orange font-bold text-lg">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Founders 👋</h2>
            <p className="text-white/80 text-lg">Dua orang nekat yang memulai semua ini</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center card-hover">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">{founder.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                <p className="text-yellow-300 font-semibold mb-4">{founder.role}</p>
                <p className="text-white/80">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '200+', label: 'Outlet', emoji: '🏪' },
              { number: '5M+', label: 'Cup Terjual', emoji: '🧋' },
              { number: '1M+', label: 'Followers', emoji: '👥' },
              { number: '50+', label: 'Kota', emoji: '🏙️' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl md:text-4xl font-bold text-tea-orange mb-1">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
