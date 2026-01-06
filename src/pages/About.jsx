function About() {
  const milestones = [
    {
      year: '2019',
      title: 'Gerobak Pertama',
      desc: 'Mulai dari gerobak kecil di pinggir kampus UI Depok. Modal nekat dan resep rahasia!',
      emoji: '🛒',
    },
    {
      year: '2020',
      title: 'Survive Pandemi',
      desc: '10 outlet! Tetap bertahan di masa sulit dengan inovasi delivery dan drive-thru.',
      emoji: '💪',
    },
    {
      year: '2021',
      title: 'Viral TikTok',
      desc: '50 outlet dan video "Santai Dulu, Teh Dulu" viral dengan 10 juta views!',
      emoji: '📱',
    },
    {
      year: '2022',
      title: '100 Outlet',
      desc: 'Milestone besar! Ekspansi ke Jawa, Bali, dan Sumatera.',
      emoji: '🎉',
    },
    {
      year: '2023',
      title: '200 Outlet',
      desc: 'Menyebar ke seluruh Indonesia! Dari Medan sampai Makassar.',
      emoji: '🚀',
    },
    {
      year: '2024',
      title: 'Terus Berkembang',
      desc: 'Target 500 outlet dan ekspansi ke Asia Tenggara!',
      emoji: '🌏',
    },
  ]

  const values = [
    {
      icon: '🍵',
      title: 'Keep It Real',
      desc: 'Teh asli, bukan abal-abal. Kita pakai daun teh pilihan dari perkebunan terbaik di Indonesia. No artificial flavors, no shortcuts!',
      color: 'bg-fresh-green',
    },
    {
      icon: '💰',
      title: 'Keep It Affordable',
      desc: 'Enak gak harus mahal! Kita percaya semua orang berhak menikmati minuman berkualitas tanpa harus merogoh kocek dalam.',
      color: 'bg-tea-orange',
    },
    {
      icon: '✨',
      title: 'Keep It Fun',
      desc: 'Suasana santai, vibes positif! Setiap cup Teh Santai adalah momen untuk take a break dan enjoy life.',
      color: 'bg-sunny-yellow',
    },
  ]

  const founders = [
    {
      name: 'Budi Santoso',
      role: 'Co-Founder & CEO',
      bio: 'Mantan mahasiswa Teknik yang hobi bikin minuman. Terobsesi dengan resep teh yang sempurna.',
      emoji: '👨‍💼',
    },
    {
      name: 'Andi Wijaya',
      role: 'Co-Founder & COO',
      bio: 'Background di bisnis F&B. Jago urusan operasional dan bikin outlet makin cuan.',
      emoji: '👨‍🍳',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-warm-cream via-sunny-yellow-light/30 to-warm-cream overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 text-6xl animate-float opacity-20">🍃</div>
          <div className="absolute bottom-10 left-10 text-5xl animate-bounce-slow opacity-20">🍵</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6 animate-bounce-slow">🍃</div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cerita <span className="text-tea-orange">Teh Santai</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Dari gerobak kecil di pinggir kampus, jadi 200+ outlet yang bikin jutaan orang
            bilang "Santai dulu, teh dulu!"
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-tea-orange to-sunny-yellow rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[8rem] md:text-[10rem] animate-bounce-slow">🛒</div>
                  <p className="text-white font-heading text-2xl font-bold mt-4">Since 2019</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-fresh-green text-white p-4 rounded-2xl shadow-lg animate-float">
                <span className="text-3xl">🍵</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-sunny-yellow p-4 rounded-2xl shadow-lg animate-bounce-slow">
                <span className="text-3xl">💪</span>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bermula dari Rasa Kesal... 😤
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  <span className="text-tea-orange font-bold">2019.</span> Dua mahasiswa iseng
                  lagi nongkrong di pinggir kampus. Lagi haus, pengen beli minuman, eh harganya
                  mahal semua. Padahal cuma es teh!
                </p>
                <p>
                  "Masa sih es teh doang harus 15 ribu? Kita bikin sendiri aja yang lebih murah
                  tapi tetep enak!" — dan dari situlah Teh Santai lahir.
                </p>
                <p>
                  Dengan modal seadanya, gerobak pinjaman, dan resep racikan sendiri, Teh Santai
                  mulai jualan di pinggir kampus UI Depok. Yang bikin beda?
                  <span className="text-fresh-green font-bold"> Daun teh asli, bukan teh celup!</span>
                </p>
                <p>
                  Ternyata banyak yang suka. Dari mahasiswa, dosen, sampai tukang ojol. Semuanya
                  bilang hal yang sama: <span className="text-tea-orange font-bold">"Enak, murah, mantap!"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami 💝
            </h2>
            <p className="text-gray-600 text-lg">Yang selalu kami pegang teguh sejak hari pertama</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center card-hover"
              >
                <div className={`w-20 h-20 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami 🛤️
            </h2>
            <p className="text-gray-600 text-lg">Dari nol sampai 200+ outlet!</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-tea-orange/20 hidden md:block"></div>

            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-warm-cream rounded-2xl p-6 card-hover">
                      <div className="text-4xl mb-2">{milestone.emoji}</div>
                      <div className="text-tea-orange font-heading font-bold text-xl mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-tea-orange rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-tea-orange to-tea-orange-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Meet the Founders 👋
            </h2>
            <p className="text-white/80 text-lg">Dua orang nekat yang memulai semua ini</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">{founder.emoji}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1">{founder.name}</h3>
                <p className="text-sunny-yellow font-semibold mb-4">{founder.role}</p>
                <p className="text-white/80">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                <div className="font-heading text-3xl md:text-4xl font-bold text-tea-orange mb-1">
                  {stat.number}
                </div>
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
