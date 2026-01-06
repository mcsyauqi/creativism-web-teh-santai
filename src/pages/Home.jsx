import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const bestSellers = [
    {
      name: 'Teh Santai Original',
      price: 'Rp 5.000',
      desc: 'The OG! Teh manis klasik yang never fails',
      emoji: '🍵',
      color: 'bg-tea-orange',
    },
    {
      name: 'Teh Santai Lemon',
      price: 'Rp 8.000',
      desc: 'Seger dengan perasan lemon asli',
      emoji: '🍋',
      color: 'bg-sunny-yellow',
    },
    {
      name: 'Teh Santai Lychee',
      price: 'Rp 10.000',
      desc: 'Sweet & fruity, favorit para cewek',
      emoji: '🍒',
      color: 'bg-pink-500',
    },
    {
      name: 'Teh Santai Thai',
      price: 'Rp 12.000',
      desc: 'Creamy Thai tea yang bikin nagih',
      emoji: '🧋',
      color: 'bg-tea-orange-dark',
    },
  ]

  const whyUs = [
    {
      icon: '🍃',
      title: 'Daun Teh Asli',
      desc: 'Bukan teh celup atau serbuk! 100% daun teh pilihan dari perkebunan terbaik.',
    },
    {
      icon: '🍬',
      title: 'Manis Pas',
      desc: 'Bisa request less sugar, normal, atau extra sweet. Sesuai selera kamu!',
    },
    {
      icon: '💰',
      title: 'Murah Meriah',
      desc: 'Mulai 5K aja, dompet aman! Kualitas premium, harga merakyat.',
    },
    {
      icon: '📍',
      title: 'Dimana-mana',
      desc: '200+ outlet se-Indonesia. Dari Sabang sampai Merauke (almost)!',
    },
  ]

  const menuCategories = [
    { name: 'Teh Original', emoji: '🍵', color: 'from-tea-orange to-tea-orange-dark' },
    { name: 'Teh Buah', emoji: '🍊', color: 'from-yellow-400 to-orange-500' },
    { name: 'Teh Susu', emoji: '🥛', color: 'from-amber-200 to-amber-400' },
    { name: 'Teh Cheese', emoji: '🧀', color: 'from-yellow-300 to-yellow-500' },
    { name: 'Snack Partners', emoji: '🍟', color: 'from-red-400 to-red-600' },
    { name: 'Seasonal Menu', emoji: '✨', color: 'from-purple-400 to-pink-500' },
  ]

  const instagramPosts = [
    { id: 1, emoji: '🍵', caption: 'Teh time is the best time!' },
    { id: 2, emoji: '🧋', caption: 'Thai Tea vibes~' },
    { id: 3, emoji: '🍋', caption: 'Lemon fresh!' },
    { id: 4, emoji: '🎉', caption: 'Happy customers!' },
    { id: 5, emoji: '☀️', caption: 'Summer refresh!' },
    { id: 6, emoji: '💕', caption: 'Share the love!' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bestSellers.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-warm-cream via-sunny-yellow-light/30 to-warm-cream overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl md:text-8xl animate-float opacity-20">🍵</div>
          <div className="absolute top-1/4 right-10 text-5xl md:text-7xl animate-bounce-slow opacity-20">🍃</div>
          <div className="absolute bottom-20 left-1/4 text-4xl md:text-6xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🧊</div>
          <div className="absolute bottom-1/3 right-1/4 text-5xl md:text-7xl animate-bounce-slow opacity-20" style={{ animationDelay: '0.5s' }}>✨</div>
          <div className="absolute top-1/2 left-1/3 text-3xl md:text-5xl animate-float opacity-10" style={{ animationDelay: '2s' }}>🍋</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-block bg-fresh-green/10 text-fresh-green font-bold px-4 py-2 rounded-full text-sm mb-6">
                🎉 200+ Outlet se-Indonesia
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Santai Dulu,
                <br />
                <span className="text-tea-orange">Teh Dulu!</span> 🍵
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Es teh segar dengan daun teh pilihan, manis pas, dan harga ramah kantong.
                <span className="text-tea-orange font-bold"> Mulai dari 5 ribuan aja!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/menu"
                  className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center justify-center space-x-2"
                >
                  <span>Lihat Menu</span>
                  <span className="text-xl">🧋</span>
                </Link>
                <Link
                  to="/locations"
                  className="bg-white hover:bg-gray-50 text-gray-800 font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale border-2 border-gray-200 inline-flex items-center justify-center space-x-2"
                >
                  <span>📍</span>
                  <span>Cari Outlet</span>
                </Link>
              </div>
            </div>

            {/* Hero Image Area */}
            <div className="relative flex justify-center items-center animate-fade-in">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Splash Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-tea-orange via-sunny-yellow to-tea-orange-light rounded-full animate-pulse opacity-20 blur-3xl"></div>

                {/* Main Cup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[12rem] md:text-[16rem] animate-bounce-slow drop-shadow-2xl">
                    🧋
                  </div>
                </div>

                {/* Ice Cubes */}
                <div className="absolute top-10 right-10 text-4xl animate-float" style={{ animationDelay: '0.3s' }}>🧊</div>
                <div className="absolute bottom-20 left-5 text-3xl animate-float" style={{ animationDelay: '0.6s' }}>🧊</div>
                <div className="absolute top-1/3 left-0 text-2xl animate-float" style={{ animationDelay: '0.9s' }}>🧊</div>

                {/* Leaves */}
                <div className="absolute top-5 left-1/4 text-3xl animate-wiggle">🍃</div>
                <div className="absolute bottom-10 right-1/4 text-2xl animate-wiggle" style={{ animationDelay: '0.5s' }}>🍃</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Carousel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Sellers 🔥
            </h2>
            <p className="text-gray-600 text-lg">Yang paling laris dan paling disukai!</p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bestSellers.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-md mx-auto">
                      <div className={`${item.color} rounded-3xl p-8 text-white text-center card-hover`}>
                        <div className="text-7xl mb-4 animate-bounce-slow">{item.emoji}</div>
                        <h3 className="font-heading text-2xl font-bold mb-2">{item.name}</h3>
                        <p className="text-white/80 mb-4">{item.desc}</p>
                        <div className="text-3xl font-heading font-bold">{item.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {bestSellers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-tea-orange w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All Best Sellers Grid - Desktop */}
          <div className="hidden md:grid grid-cols-4 gap-6 mt-12">
            {bestSellers.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-2xl p-6 text-white text-center card-hover cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-white/80 text-sm mb-2 line-clamp-2">{item.desc}</p>
                <div className="text-xl font-heading font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Teh Santai */}
      <section className="py-16 md:py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Teh Santai? 🤔
            </h2>
            <p className="text-gray-600 text-lg">4 alasan kenapa kamu harus cobain!</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Menu Favorit 📖
            </h2>
            <p className="text-gray-600 text-lg">Pilih sesuai mood kamu hari ini!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {menuCategories.map((cat, index) => (
              <Link
                key={index}
                to="/menu"
                className={`bg-gradient-to-br ${cat.color} rounded-2xl p-6 md:p-8 text-white text-center card-hover group`}
              >
                <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {cat.emoji}
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold">{cat.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center space-x-2"
            >
              <span>Lihat Full Menu</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Outlet Locator CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-fresh-green to-fresh-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6 animate-bounce-slow">📍</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Teh Santai di Dekat Kamu
          </h2>
          <p className="text-white/80 text-lg mb-8">
            200+ outlet siap melayani kehausanmu. Cari yang terdekat yuk!
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex bg-white rounded-full p-2">
              <input
                type="text"
                placeholder="Masukkan kota atau area..."
                className="flex-1 px-4 py-2 text-gray-800 bg-transparent focus:outline-none"
              />
              <Link
                to="/locations"
                className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-6 py-2 rounded-full transition-all duration-200"
              >
                Cari
              </Link>
            </div>
          </div>

          <Link
            to="/locations"
            className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
          >
            Atau lihat semua outlet →
          </Link>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📸 @tehsantai.id
            </h2>
            <p className="text-gray-600 text-lg">Follow buat update terbaru dan promo seru!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/tehsantai.id"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gradient-to-br from-tea-orange via-pink-500 to-purple-600 rounded-xl flex items-center justify-center group overflow-hidden relative"
              >
                <span className="text-4xl md:text-5xl group-hover:scale-125 transition-transform duration-300">
                  {post.emoji}
                </span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs text-center px-2">{post.caption}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/tehsantai.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-tea-orange hover:text-tea-orange-dark font-bold transition-colors"
            >
              <span>Follow @tehsantai.id</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sunny-yellow via-tea-orange-light to-tea-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6 animate-bounce-slow">🚀</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Mau Punya Outlet Teh Santai?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Mulai dari <span className="font-bold">50 juta</span>, balik modal cepat!
            <br />
            Bergabunglah dengan 200+ mitra sukses kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/franchise"
              className="bg-white hover:bg-gray-50 text-tea-orange font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center justify-center space-x-2"
            >
              <span>Info Franchise</span>
              <span className="text-xl">💼</span>
            </Link>
            <Link
              to="/contact"
              className="bg-fresh-green hover:bg-fresh-green-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center justify-center space-x-2"
            >
              <span>Hubungi Kami</span>
              <span className="text-xl">💬</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
