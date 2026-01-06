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
      bgColor: '#EA580C',
    },
    {
      name: 'Teh Santai Lemon',
      price: 'Rp 8.000',
      desc: 'Seger dengan perasan lemon asli',
      emoji: '🍋',
      bgColor: '#FBBF24',
    },
    {
      name: 'Teh Santai Lychee',
      price: 'Rp 10.000',
      desc: 'Sweet & fruity, favorit para cewek',
      emoji: '🍒',
      bgColor: '#EC4899',
    },
    {
      name: 'Teh Santai Thai',
      price: 'Rp 12.000',
      desc: 'Creamy Thai tea yang bikin nagih',
      emoji: '🧋',
      bgColor: '#C2410C',
    },
  ]

  const whyUs = [
    {
      icon: '🍃',
      title: 'Daun Teh Asli',
      desc: 'Bukan teh celup atau serbuk! 100% daun teh pilihan.',
    },
    {
      icon: '🍬',
      title: 'Manis Pas',
      desc: 'Bisa request less sugar, normal, atau extra sweet.',
    },
    {
      icon: '💰',
      title: 'Murah Meriah',
      desc: 'Mulai 5K aja, dompet aman! Harga merakyat.',
    },
    {
      icon: '📍',
      title: 'Dimana-mana',
      desc: '200+ outlet se-Indonesia. Dari Sabang sampai Merauke!',
    },
  ]

  const menuCategories = [
    { name: 'Teh Original', emoji: '🍵', bgColor: '#EA580C' },
    { name: 'Teh Buah', emoji: '🍊', bgColor: '#F97316' },
    { name: 'Teh Susu', emoji: '🥛', bgColor: '#D97706' },
    { name: 'Teh Cheese', emoji: '🧀', bgColor: '#EAB308' },
    { name: 'Snack Partners', emoji: '🍟', bgColor: '#DC2626' },
    { name: 'Seasonal Menu', emoji: '✨', bgColor: '#9333EA' },
  ]

  const instagramPosts = [
    { id: 1, emoji: '🍵' },
    { id: 2, emoji: '🧋' },
    { id: 3, emoji: '🍋' },
    { id: 4, emoji: '🎉' },
    { id: 5, emoji: '☀️' },
    { id: 6, emoji: '💕' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bestSellers.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [bestSellers.length])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] text-6xl md:text-8xl opacity-10 animate-float">🍵</div>
          <div className="absolute top-[20%] right-[10%] text-5xl md:text-7xl opacity-10 animate-bounce-slow">🍃</div>
          <div className="absolute bottom-[20%] left-[20%] text-4xl md:text-6xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🧊</div>
          <div className="absolute bottom-[30%] right-[20%] text-5xl opacity-10 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>✨</div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm mb-6">
                🎉 200+ Outlet se-Indonesia
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
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
                  className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center justify-center gap-2"
                >
                  <span>Lihat Menu</span>
                  <span>🧋</span>
                </Link>
                <Link
                  to="/locations"
                  className="bg-white hover:bg-gray-50 text-gray-800 font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale border-2 border-gray-200 inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>📍</span>
                  <span>Cari Outlet</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-yellow-300 to-orange-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>

                {/* Main Cup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10rem] md:text-[14rem] lg:text-[16rem] animate-bounce-slow drop-shadow-xl">
                    🧋
                  </span>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-0 right-0 text-4xl animate-float">🧊</div>
                <div className="absolute bottom-10 left-0 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🧊</div>
                <div className="absolute top-10 left-10 text-2xl animate-wiggle">🍃</div>
                <div className="absolute bottom-5 right-10 text-2xl animate-wiggle" style={{ animationDelay: '0.3s' }}>🍃</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Sellers 🔥
            </h2>
            <p className="text-gray-600 text-lg">Yang paling laris dan paling disukai!</p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {bestSellers.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div
                      className="rounded-3xl p-8 text-white text-center"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      <div className="text-7xl mb-4">{item.emoji}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                      <p className="text-white/80 mb-4">{item.desc}</p>
                      <div className="text-3xl font-bold">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {bestSellers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-tea-orange w-8' : 'bg-gray-300 w-3'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {bestSellers.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 text-white text-center card-hover cursor-pointer"
                style={{ backgroundColor: item.bgColor }}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-2">{item.desc}</p>
                <div className="text-2xl font-bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Teh Santai */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Teh Santai? 🤔
            </h2>
            <p className="text-gray-600 text-lg">4 alasan kenapa kamu harus cobain!</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center card-hover shadow-sm"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Menu Favorit 📖
            </h2>
            <p className="text-gray-600 text-lg">Pilih sesuai mood kamu hari ini!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {menuCategories.map((cat, index) => (
              <Link
                key={index}
                to="/menu"
                className="rounded-2xl p-6 md:p-8 text-white text-center card-hover group"
                style={{ backgroundColor: cat.bgColor }}
              >
                <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {cat.emoji}
                </div>
                <h3 className="text-lg md:text-xl font-bold">{cat.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center gap-2"
            >
              <span>Lihat Full Menu</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Outlet Locator CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-6 animate-bounce-slow">📍</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Teh Santai di Dekat Kamu
          </h2>
          <p className="text-white/80 text-lg mb-8">
            200+ outlet siap melayani kehausanmu. Cari yang terdekat yuk!
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex bg-white rounded-full p-2 shadow-lg">
              <input
                type="text"
                placeholder="Masukkan kota atau area..."
                className="flex-1 px-4 py-2 text-gray-800 bg-transparent focus:outline-none rounded-l-full"
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
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📸 @tehsantai.id
            </h2>
            <p className="text-gray-600 text-lg">Follow buat update terbaru dan promo seru!</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/tehsantai.id"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center group overflow-hidden"
              >
                <span className="text-4xl md:text-5xl group-hover:scale-125 transition-transform duration-300">
                  {post.emoji}
                </span>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/tehsantai.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-tea-orange hover:text-tea-orange-dark font-bold transition-colors"
            >
              <span>Follow @tehsantai.id</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-6 animate-bounce-slow">🚀</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
              className="bg-white hover:bg-gray-50 text-tea-orange font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center justify-center gap-2"
            >
              <span>Info Franchise</span>
              <span>💼</span>
            </Link>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 btn-hover-scale inline-flex items-center justify-center gap-2"
            >
              <span>Hubungi Kami</span>
              <span>💬</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
