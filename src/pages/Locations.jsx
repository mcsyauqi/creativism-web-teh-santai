import { useState } from 'react'

function Locations() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('semua')

  const cities = [
    { id: 'semua', name: 'Semua Kota', count: 200 },
    { id: 'jakarta', name: 'Jakarta', count: 45 },
    { id: 'bandung', name: 'Bandung', count: 25 },
    { id: 'surabaya', name: 'Surabaya', count: 20 },
    { id: 'yogyakarta', name: 'Yogyakarta', count: 15 },
    { id: 'bali', name: 'Bali', count: 15 },
  ]

  const locations = [
    { city: 'jakarta', name: 'Teh Santai Kemang', address: 'Jl. Kemang Raya No. 10, Jaksel', hours: '08:00 - 22:00', phone: '021-7190123', features: ['Dine-in', 'GoFood'] },
    { city: 'jakarta', name: 'Teh Santai Senayan', address: 'Senayan City Mall, LG Floor', hours: '10:00 - 22:00', phone: '021-5720456', features: ['Dine-in', 'Takeaway'] },
    { city: 'jakarta', name: 'Teh Santai Kelapa Gading', address: 'Mall Kelapa Gading 3, Lt. 1', hours: '10:00 - 22:00', phone: '021-4520789', features: ['Dine-in', 'GoFood'] },
    { city: 'jakarta', name: 'Teh Santai PIK', address: 'PIK Avenue, Ground Floor', hours: '10:00 - 22:00', phone: '021-2970123', features: ['Dine-in', 'GrabFood'] },
    { city: 'bandung', name: 'Teh Santai Dago', address: 'Jl. Dago No. 50, Bandung', hours: '08:00 - 23:00', phone: '022-2501234', features: ['Dine-in', 'GoFood'] },
    { city: 'bandung', name: 'Teh Santai PVJ', address: 'Paris Van Java, Lt. 1', hours: '10:00 - 22:00', phone: '022-8206789', features: ['Dine-in', 'Takeaway'] },
    { city: 'bandung', name: 'Teh Santai Braga', address: 'Jl. Braga No. 100', hours: '09:00 - 22:00', phone: '022-4230456', features: ['Live Music'] },
    { city: 'surabaya', name: 'Teh Santai Tunjungan', address: 'Tunjungan Plaza 3, Lt. 2', hours: '10:00 - 22:00', phone: '031-5310123', features: ['Dine-in', 'GoFood'] },
    { city: 'surabaya', name: 'Teh Santai Galaxy', address: 'Galaxy Mall, Lt. 1', hours: '10:00 - 22:00', phone: '031-5940456', features: ['Dine-in'] },
    { city: 'yogyakarta', name: 'Teh Santai Malioboro', address: 'Jl. Malioboro No. 52', hours: '08:00 - 23:00', phone: '0274-512345', features: ['Dine-in', 'GoFood'] },
    { city: 'yogyakarta', name: 'Teh Santai UGM', address: 'Depan Kampus UGM', hours: '07:00 - 22:00', phone: '0274-551234', features: ['Student Disc'] },
    { city: 'bali', name: 'Teh Santai Kuta', address: 'Beachwalk Mall, Lt. 1', hours: '10:00 - 22:00', phone: '0361-755123', features: ['Dine-in', 'GoFood'] },
    { city: 'bali', name: 'Teh Santai Seminyak', address: 'Jl. Seminyak No. 88', hours: '09:00 - 23:00', phone: '0361-738456', features: ['Beach Vibes'] },
  ]

  const filteredLocations = locations.filter((loc) => {
    const matchesCity = selectedCity === 'semua' || loc.city === selectedCity
    const matchesSearch = searchQuery === '' ||
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCity && matchesSearch
  })

  return (
    <div>
      {/* Hero */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">📍</div>
          <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-bounce-slow">🏪</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow">📍</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Outlet <span className="text-tea-orange">Teh Santai</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            200+ outlet siap melayani kehausanmu! Cari yang terdekat yuk.
          </p>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari outlet atau alamat..."
                className="w-full px-5 py-4 pl-12 rounded-full border-2 border-gray-200 focus:border-tea-orange focus:outline-none text-gray-800 shadow-lg"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🔍</span>
            </div>
          </div>
        </div>
      </section>

      {/* City Filter */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200
                  ${selectedCity === city.id
                    ? 'bg-tea-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {city.name} <span className="opacity-70">({city.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredLocations.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">
                Menampilkan <span className="font-bold text-tea-orange">{filteredLocations.length}</span> outlet
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredLocations.map((location, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 card-hover shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{location.name}</h3>
                      <span className="text-2xl">🏪</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p className="flex items-start gap-2"><span>📍</span><span>{location.address}</span></p>
                      <p className="flex items-center gap-2"><span>⏰</span><span>{location.hours}</span></p>
                      <p className="flex items-center gap-2"><span>📞</span><span>{location.phone}</span></p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.features.map((feature, i) => (
                        <span key={i} className="bg-amber-50 text-gray-700 text-xs px-2 py-1 rounded-full">{feature}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full text-center text-sm transition-all"
                      >
                        Directions 🗺️
                      </a>
                      <a href={`tel:${location.phone}`} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-full text-sm">📞</a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Outlet tidak ditemukan</h3>
              <p className="text-gray-600">Coba kata kunci lain atau pilih kota berbeda</p>
            </div>
          )}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Peta Lokasi 🗺️</h2>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl h-80 flex items-center justify-center border-2 border-dashed border-green-300">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600 mb-4">Interactive map coming soon!</p>
              <a
                href="https://maps.google.com/maps?q=teh+santai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full transition-all inline-flex items-center gap-2"
              >
                <span>Buka di Google Maps</span><span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon ke Kotamu!</h2>
          <p className="text-white/80 mb-8">Teh Santai terus ekspansi. Kota berikut segera hadir:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Palembang', 'Balikpapan', 'Pontianak', 'Manado', 'Batam'].map((city, i) => (
              <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">{city}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations
