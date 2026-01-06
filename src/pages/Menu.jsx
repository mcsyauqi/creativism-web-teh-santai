import { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  const [activeFilter, setActiveFilter] = useState('semua')

  const filters = [
    { id: 'semua', label: 'Semua', emoji: '🍵' },
    { id: 'original', label: 'Original', emoji: '☕' },
    { id: 'buah', label: 'Buah', emoji: '🍊' },
    { id: 'susu', label: 'Susu', emoji: '🥛' },
    { id: 'cheese', label: 'Cheese', emoji: '🧀' },
    { id: 'snacks', label: 'Snacks', emoji: '🍟' },
  ]

  const menuItems = [
    { category: 'original', name: 'Teh Santai Original', price: 5000, desc: 'Teh manis klasik, simple is the best.', emoji: '🍵', bestseller: true },
    { category: 'original', name: 'Teh Santai Less Sugar', price: 5000, desc: 'Sama enaknya, less guilty.', emoji: '🍵', bestseller: false },
    { category: 'original', name: 'Teh Tawar', price: 4000, desc: 'For the purist. Zero sugar.', emoji: '🍵', bestseller: false },
    { category: 'buah', name: 'Teh Lemon', price: 8000, desc: 'Seger dengan perasan lemon asli.', emoji: '🍋', bestseller: true },
    { category: 'buah', name: 'Teh Lychee', price: 10000, desc: 'Sweet & fruity, favorit para cewek.', emoji: '🍒', bestseller: true },
    { category: 'buah', name: 'Teh Passion Fruit', price: 10000, desc: 'Asam manis tropical vibes.', emoji: '🥭', bestseller: false },
    { category: 'buah', name: 'Teh Peach', price: 10000, desc: 'Peachy keen! Aroma segar.', emoji: '🍑', bestseller: false },
    { category: 'buah', name: 'Teh Mango', price: 12000, desc: 'Mangga harum manis tropis.', emoji: '🥭', bestseller: false },
    { category: 'susu', name: 'Teh Susu', price: 10000, desc: 'Creamy classic combination.', emoji: '🥛', bestseller: false },
    { category: 'susu', name: 'Thai Tea', price: 12000, desc: 'Creamy orange tea yang nagih!', emoji: '🧋', bestseller: true },
    { category: 'susu', name: 'Teh Susu Coklat', price: 12000, desc: 'Double comfort dalam satu cup.', emoji: '🍫', bestseller: false },
    { category: 'susu', name: 'Matcha Latte', price: 15000, desc: 'Green tea lover wajib coba!', emoji: '🍵', bestseller: false },
    { category: 'susu', name: 'Taro Latte', price: 15000, desc: 'Purple vibes! Creamy & lembut.', emoji: '🍠', bestseller: false },
    { category: 'cheese', name: 'Teh Original Cheese', price: 15000, desc: 'Cheese foam creamy di atas teh.', emoji: '🧀', bestseller: false },
    { category: 'cheese', name: 'Thai Tea Cheese', price: 18000, desc: 'Best combo! Thai tea + cheese foam.', emoji: '🧀', bestseller: true },
    { category: 'cheese', name: 'Matcha Cheese', price: 18000, desc: 'Matcha meets cheese, unik!', emoji: '🧀', bestseller: false },
    { category: 'snacks', name: 'Roti Bakar', price: 12000, desc: 'Roti bakar berbagai topping.', emoji: '🍞', bestseller: false },
    { category: 'snacks', name: 'Cireng', price: 8000, desc: 'Aci goreng crispy + bumbu rujak.', emoji: '🥟', bestseller: false },
    { category: 'snacks', name: 'Kentang Goreng', price: 15000, desc: 'French fries crispy classic.', emoji: '🍟', bestseller: false },
    { category: 'snacks', name: 'Pisang Goreng', price: 10000, desc: 'Pisang crispy + topping coklat.', emoji: '🍌', bestseller: false },
  ]

  const filteredItems = activeFilter === 'semua'
    ? menuItems
    : menuItems.filter((item) => item.category === activeFilter)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const categories = [
    { id: 'original', title: 'Teh Original Series', emoji: '☕' },
    { id: 'buah', title: 'Teh Buah Series', emoji: '🍊' },
    { id: 'susu', title: 'Teh Susu Series', emoji: '🥛' },
    { id: 'cheese', title: 'Teh Cheese Series', emoji: '🧀' },
    { id: 'snacks', title: 'Snack Partners', emoji: '🍟' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">🧋</div>
          <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-bounce-slow">🍵</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow">🧋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Menu <span className="text-tea-orange">Teh Santai</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih sesuai mood kamu! Semua dibuat fresh dengan daun teh pilihan.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2
                  ${activeFilter === filter.id
                    ? 'bg-tea-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <span>{filter.emoji}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeFilter === 'semua' ? (
            <>
              {categories.map((cat) => (
                <div key={cat.id} className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">{cat.emoji}</span>
                    <span>{cat.title}</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {menuItems.filter(item => item.category === cat.id).map((item, index) => (
                      <MenuCard key={index} item={item} formatPrice={formatPrice} />
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredItems.map((item, index) => (
                <MenuCard key={index} item={item} formatPrice={formatPrice} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Pilihan Ukuran 📏
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-2xl p-6 text-center card-hover">
              <div className="text-5xl mb-4">🥤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regular</h3>
              <p className="text-gray-600 mb-2">400ml</p>
              <p className="text-tea-orange font-bold">Harga normal</p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 text-center card-hover border-2 border-tea-orange relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tea-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-5xl mb-4">🧋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Large</h3>
              <p className="text-gray-600 mb-2">600ml</p>
              <p className="text-tea-orange font-bold">+Rp 3.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bisa Custom Sesuai Selera!
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Request gratis untuk semua minuman:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Less Sugar 🍬', 'No Ice 🧊', 'Extra Ice ❄️', 'Less Ice 🥶'].map((option, index) => (
              <span
                key={index}
                className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Udah pilih? Yuk order! 🛵
          </h2>
          <p className="text-gray-600 mb-8">
            Tersedia di GoFood, GrabFood, atau langsung ke outlet terdekat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://gofood.link/tehsantai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 btn-hover-scale inline-flex items-center justify-center gap-2"
            >
              <span>Order GoFood</span>
              <span>🛵</span>
            </a>
            <Link
              to="/locations"
              className="bg-tea-orange hover:bg-tea-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 btn-hover-scale inline-flex items-center justify-center gap-2"
            >
              <span>Cari Outlet</span>
              <span>📍</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function MenuCard({ item, formatPrice }) {
  return (
    <div className="bg-white rounded-2xl p-6 card-hover relative overflow-hidden shadow-sm">
      {item.bestseller && (
        <div className="absolute top-3 right-3 bg-tea-orange text-white text-xs font-bold px-3 py-1 rounded-full">
          🔥 Best Seller
        </div>
      )}
      <div className="text-4xl mb-3">{item.emoji}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-tea-orange">
          {formatPrice(item.price)}
        </span>
        {item.category !== 'snacks' && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Large +3K
          </span>
        )}
      </div>
    </div>
  )
}

export default Menu
