import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Smartphone, Wrench, Shield, Clock, Search } from 'lucide-react'
import { useState } from 'react'

function LandingPage() {
  const navigate = useNavigate()
  const [trackingNumber, setTrackingNumber] = useState('')

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      navigate('/servis/track', { state: { ticketNumber: trackingNumber } })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">GANK.</div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition">Beranda</a>
              <a href="/katalog" className="text-gray-700 hover:text-blue-600 transition">Katalog HP Bekas</a>
              <a href="/servis" className="text-gray-700 hover:text-blue-600 transition">Servis HP</a>
              <a href="/trade-in" className="text-gray-700 hover:text-blue-600 transition">Trade-In</a>
            </div>
            <button 
              onClick={() => navigate('/akun')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Masuk
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Servis HP Terpercaya<br />& Jual Beli HP Bekas
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transparan, Cepat, dan Bergaransi. Tracking real-time proses servis HP Anda dengan bukti foto/video.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/servis')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Wrench className="w-5 h-5" />
              Servis HP
            </button>
            <button 
              onClick={() => navigate('/katalog')}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              Lihat Katalog
            </button>
          </div>
        </motion.div>
      </section>

      {/* Quick Tracker */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Cek Status Servis</h2>
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Masukkan Nomor Tiket atau No. HP"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Track
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Kenapa Pilih GANK.?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Terpercaya', desc: 'IMEI terverifikasi, BAST digital, dan audit trail lengkap' },
              { icon: Clock, title: 'Cepat', desc: 'Proses servis rata-rata < 24 jam dengan teknisi berpengalaman' },
              { icon: Wrench, title: 'Transparan', desc: 'Tracking real-time dengan update foto/video setiap tahap' },
              { icon: Smartphone, title: 'Bergaransi', desc: 'Garansi servis hingga 30 hari tergantung jenis kerusakan' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Apa Kata Mereka?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rina, 25 tahun', role: 'Pekerja Kantoran', text: 'Servis cepat, bisa tracking dari kantor. Harga transparan tanpa biaya tersembunyi!' },
              { name: 'Budi, 35 tahun', role: 'Pengusaha', text: 'Beli HP bekas grade A di GANK. Kondisi seperti baru, garansi jelas. Recommended!' },
              { name: 'Andi, 28 tahun', role: 'Freelancer', text: 'Trade-in HP lama mudah banget. Estimasi harga akurat, proses cepat.' },
            ].map((testi, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-gray-600 mb-4 italic">"{testi.text}"</p>
                <div className="font-semibold text-gray-800">{testi.name}</div>
                <div className="text-sm text-gray-500">{testi.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Siap untuk Pengalaman Servis & Jual Beli HP yang Lebih Baik?</h2>
          <p className="text-xl text-blue-100 mb-8">Bergabunglah dengan ribuan customer puas lainnya.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/servis')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition"
            >
              Booking Servis Sekarang
            </button>
            <button 
              onClick={() => navigate('/katalog')}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition"
            >
              Lihat Katalog HP
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">GANK.</div>
              <p className="text-sm">Platform servis HP dan jual beli HP bekas terpercaya dengan fokus pada transparansi dan kualitas.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/servis" className="hover:text-white transition">Servis HP</a></li>
                <li><a href="/katalog" className="hover:text-white transition">Katalog HP Bekas</a></li>
                <li><a href="/trade-in" className="hover:text-white transition">Trade-In</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">IG</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">FB</a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">WA</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2024 GANK. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
