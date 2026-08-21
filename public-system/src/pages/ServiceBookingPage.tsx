import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'

function ServiceBookingPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deviceBrand: '',
    deviceModel: '',
    imei: '',
    issue: '',
    method: 'walkin',
    address: '',
    schedule: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking berhasil! Nomor tiket: GANK-' + Date.now())
    navigate('/servis/track')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">GANK.</div>
          <button onClick={() => navigate('/')} className="text-gray-600 hover:text-blue-600">Kembali</button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Servis Online</h1>
        <p className="text-gray-600 mb-8">Isi form di bawah untuk booking servis HP Anda</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="08xx-xxxx-xxxx"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Merk HP *</label>
              <select
                required
                value={formData.deviceBrand}
                onChange={(e) => setFormData({...formData, deviceBrand: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih Merk</option>
                <option value="Apple">Apple iPhone</option>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="OPPO">OPPO</option>
                <option value="Vivo">Vivo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model HP *</label>
              <input
                required
                type="text"
                value={formData.deviceModel}
                onChange={(e) => setFormData({...formData, deviceModel: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Contoh: iPhone 13 Pro"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">IMEI (Opsional)</label>
            <input
              type="text"
              value={formData.imei}
              onChange={(e) => setFormData({...formData, imei: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="15 digit IMEI"
              maxLength={15}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Kerusakan *</label>
            <textarea
              required
              value={formData.issue}
              onChange={(e) => setFormData({...formData, issue: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Jelaskan masalah HP Anda secara detail"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Metode Servis *</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="method"
                  value="walkin"
                  checked={formData.method === 'walkin'}
                  onChange={(e) => setFormData({...formData, method: e.target.value})}
                  className="w-4 h-4 text-blue-600"
                />
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Datang ke Toko (Walk-in)</div>
                    <div className="text-sm text-gray-500">Antar langsung ke toko kami</div>
                  </div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name="method"
                  value="pickup"
                  checked={formData.method === 'pickup'}
                  onChange={(e) => setFormData({...formData, method: e.target.value})}
                  className="w-4 h-4 text-blue-600"
                />
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Pick-up ke Alamat</div>
                    <div className="text-sm text-gray-500">Kami jemput HP Anda di lokasi</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {formData.method === 'pickup' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Lengkap</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Alamat lengkap untuk pick-up"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jadwal Pick-up</label>
                <input
                  type="datetime-local"
                  value={formData.schedule}
                  onChange={(e) => setFormData({...formData, schedule: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Booking Sekarang
          </button>
        </form>
      </div>
    </div>
  )
}

export default ServiceBookingPage
