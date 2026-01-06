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
    { id: 'semarang', name: 'Semarang', count: 12 },
    { id: 'medan', name: 'Medan', count: 10 },
    { id: 'makassar', name: 'Makassar', count: 8 },
    { id: 'bali', name: 'Bali', count: 15 },
  ]

  const locations = [
    // Jakarta
    {
      city: 'jakarta',
      name: 'Teh Santai Kemang',
      address: 'Jl. Kemang Raya No. 10, Jakarta Selatan',
      hours: '08:00 - 22:00',
      phone: '021-7190123',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },
    {
      city: 'jakarta',
      name: 'Teh Santai Senayan',
      address: 'Senayan City Mall, LG Floor Unit 12, Jakarta',
      hours: '10:00 - 22:00',
      phone: '021-5720456',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'jakarta',
      name: 'Teh Santai Kelapa Gading',
      address: 'Mall Kelapa Gading 3, Lt. 1, Jakarta Utara',
      hours: '10:00 - 22:00',
      phone: '021-4520789',
      features: ['Dine-in', 'Takeaway'],
    },
    {
      city: 'jakarta',
      name: 'Teh Santai Menteng',
      address: 'Jl. Menteng Raya No. 25, Jakarta Pusat',
      hours: '07:00 - 21:00',
      phone: '021-3140567',
      features: ['Takeaway', 'GoFood'],
    },
    {
      city: 'jakarta',
      name: 'Teh Santai PIK',
      address: 'PIK Avenue, Ground Floor, Jakarta Utara',
      hours: '10:00 - 22:00',
      phone: '021-2970123',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'jakarta',
      name: 'Teh Santai Blok M',
      address: 'Blok M Plaza, Lt. 2, Jakarta Selatan',
      hours: '10:00 - 21:00',
      phone: '021-7260789',
      features: ['Dine-in', 'Takeaway'],
    },

    // Bandung
    {
      city: 'bandung',
      name: 'Teh Santai Dago',
      address: 'Jl. Dago No. 50, Bandung',
      hours: '08:00 - 23:00',
      phone: '022-2501234',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'bandung',
      name: 'Teh Santai PVJ',
      address: 'Paris Van Java, Lt. 1, Bandung',
      hours: '10:00 - 22:00',
      phone: '022-8206789',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },
    {
      city: 'bandung',
      name: 'Teh Santai Braga',
      address: 'Jl. Braga No. 100, Bandung',
      hours: '09:00 - 22:00',
      phone: '022-4230456',
      features: ['Dine-in', 'Takeaway', 'Live Music Weekend'],
    },
    {
      city: 'bandung',
      name: 'Teh Santai Cihampelas',
      address: 'Cihampelas Walk, Lt. Ground, Bandung',
      hours: '10:00 - 22:00',
      phone: '022-2034567',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },

    // Surabaya
    {
      city: 'surabaya',
      name: 'Teh Santai Tunjungan',
      address: 'Tunjungan Plaza 3, Lt. 2, Surabaya',
      hours: '10:00 - 22:00',
      phone: '031-5310123',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'surabaya',
      name: 'Teh Santai Galaxy Mall',
      address: 'Galaxy Mall, Lt. 1, Surabaya',
      hours: '10:00 - 22:00',
      phone: '031-5940456',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },
    {
      city: 'surabaya',
      name: 'Teh Santai Pakuwon',
      address: 'Pakuwon Mall, Ground Floor, Surabaya',
      hours: '10:00 - 22:00',
      phone: '031-7390789',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },

    // Yogyakarta
    {
      city: 'yogyakarta',
      name: 'Teh Santai Malioboro',
      address: 'Jl. Malioboro No. 52, Yogyakarta',
      hours: '08:00 - 23:00',
      phone: '0274-512345',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'yogyakarta',
      name: 'Teh Santai Amplaz',
      address: 'Ambarukmo Plaza, Lt. 1, Yogyakarta',
      hours: '10:00 - 22:00',
      phone: '0274-486789',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },
    {
      city: 'yogyakarta',
      name: 'Teh Santai UGM',
      address: 'Jl. Kaliurang KM 5, Depan Kampus UGM',
      hours: '07:00 - 22:00',
      phone: '0274-551234',
      features: ['Takeaway', 'GoFood', 'Student Discount'],
    },

    // Semarang
    {
      city: 'semarang',
      name: 'Teh Santai Simpang Lima',
      address: 'Jl. Simpang Lima No. 1, Semarang',
      hours: '08:00 - 22:00',
      phone: '024-8310456',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },
    {
      city: 'semarang',
      name: 'Teh Santai Paragon',
      address: 'Paragon Mall, Lt. Ground, Semarang',
      hours: '10:00 - 22:00',
      phone: '024-8506789',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },

    // Medan
    {
      city: 'medan',
      name: 'Teh Santai Sun Plaza',
      address: 'Sun Plaza, Lt. 1, Medan',
      hours: '10:00 - 22:00',
      phone: '061-4520123',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'medan',
      name: 'Teh Santai Centre Point',
      address: 'Centre Point Mall, Ground Floor, Medan',
      hours: '10:00 - 22:00',
      phone: '061-4530456',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },

    // Makassar
    {
      city: 'makassar',
      name: 'Teh Santai Trans Studio',
      address: 'Trans Studio Mall, Lt. 1, Makassar',
      hours: '10:00 - 22:00',
      phone: '0411-850123',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'makassar',
      name: 'Teh Santai Panakkukang',
      address: 'Mall Panakkukang, Ground Floor, Makassar',
      hours: '10:00 - 22:00',
      phone: '0411-436789',
      features: ['Dine-in', 'Takeaway', 'GoFood'],
    },

    // Bali
    {
      city: 'bali',
      name: 'Teh Santai Kuta',
      address: 'Beachwalk Mall, Lt. 1, Kuta, Bali',
      hours: '10:00 - 22:00',
      phone: '0361-755123',
      features: ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood'],
    },
    {
      city: 'bali',
      name: 'Teh Santai Seminyak',
      address: 'Jl. Seminyak No. 88, Bali',
      hours: '09:00 - 23:00',
      phone: '0361-738456',
      features: ['Dine-in', 'Takeaway', 'Beach Vibes'],
    },
    {
      city: 'bali',
      name: 'Teh Santai Ubud',
      address: 'Jl. Monkey Forest No. 10, Ubud, Bali',
      hours: '08:00 - 21:00',
      phone: '0361-975789',
      features: ['Dine-in', 'Takeaway', 'Garden Seating'],
    },
  ]

  const filteredLocations = locations.filter((loc) => {
    const matchesCity = selectedCity === 'semua' || loc.city === selectedCity
    const matchesSearch = searchQuery === '' ||
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCity && matchesSearch
  })

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-warm-cream via-sunny-yellow-light/30 to-warm-cream overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 text-6xl animate-float opacity-20">📍</div>
          <div className="absolute bottom-10 left-10 text-5xl animate-bounce-slow opacity-20">🏪</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-4 animate-bounce-slow">📍</div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Outlet <span className="text-tea-orange">Teh Santai</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            200+ outlet siap melayani kehausanmu! Cari yang terdekat yuk.
          </p>

          {/* Search Bar */}
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
      <section className="sticky top-16 md:top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-2 scrollbar-hide">
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
                {city.name}
                <span className="ml-1 text-xs opacity-70">({city.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-16 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredLocations.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">
                Menampilkan <span className="font-bold text-tea-orange">{filteredLocations.length}</span> outlet
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredLocations.map((location, index) => (
                  <LocationCard key={index} location={location} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😢</div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Outlet tidak ditemukan
              </h3>
              <p className="text-gray-600">
                Coba kata kunci lain atau pilih kota yang berbeda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Peta Lokasi 🗺️
            </h2>
            <p className="text-gray-600">Lihat semua outlet Teh Santai di peta</p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-fresh-green/10 to-fresh-green/5 rounded-2xl h-80 md:h-96 flex items-center justify-center border-2 border-dashed border-fresh-green/30">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600 mb-4">Interactive map coming soon!</p>
              <a
                href="https://maps.google.com/maps?q=teh+santai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fresh-green hover:bg-fresh-green-dark text-white font-bold px-6 py-3 rounded-full transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Buka di Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Cities */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-tea-orange to-tea-orange-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Coming Soon ke Kotamu!
          </h2>
          <p className="text-white/80 mb-8">
            Teh Santai terus ekspansi. Kota berikut segera hadir outlet baru:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Palembang', 'Balikpapan', 'Pontianak', 'Manado', 'Batam', 'Pekanbaru'].map((city, index) => (
              <span
                key={index}
                className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function LocationCard({ location }) {
  return (
    <div className="bg-white rounded-2xl p-6 card-hover">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-heading text-lg font-bold text-gray-900">{location.name}</h3>
        <span className="text-2xl">🏪</span>
      </div>

      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <p className="flex items-start space-x-2">
          <span>📍</span>
          <span>{location.address}</span>
        </p>
        <p className="flex items-center space-x-2">
          <span>⏰</span>
          <span>{location.hours}</span>
        </p>
        <p className="flex items-center space-x-2">
          <span>📞</span>
          <span>{location.phone}</span>
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-4">
        {location.features.map((feature, index) => (
          <span
            key={index}
            className="bg-warm-cream text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <a
          href={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-fresh-green hover:bg-fresh-green-dark text-white font-semibold py-2 px-4 rounded-full text-center text-sm transition-all duration-200"
        >
          Directions 🗺️
        </a>
        <a
          href={`tel:${location.phone}`}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-full text-sm transition-all duration-200"
        >
          📞
        </a>
      </div>
    </div>
  )
}

export default Locations
