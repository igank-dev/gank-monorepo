import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Search, CheckCircle, Clock } from 'lucide-react'

const mockTicket = {
  ticketNumber: 'GANK-20240101-0001',
  customerName: 'John Doe',
  device: 'iPhone 13 Pro',
  issue: 'Layar pecah & baterai cepat habis',
  status: 'repairing',
  timeline: [
    { step: 1, name: 'Diterima', completed: true, timestamp: '2024-01-01 10:00' },
    { step: 2, name: 'Sedang Diagnosa', completed: true, timestamp: '2024-01-01 11:30' },
    { step: 3, name: 'Menunggu Persetujuan', completed: false, timestamp: null },
    { step: 4, name: 'Sedang Diperbaiki', completed: false, timestamp: null },
    { step: 5, name: 'Quality Control', completed: false, timestamp: null },
    { step: 6, name: 'Siap Diambil', completed: false, timestamp: null },
    { step: 7, name: 'Selesai', completed: false, timestamp: null },
  ],
  estimatedCost: 1500000,
}

function TrackingPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [ticketNumber, setTicketNumber] = useState(location.state?.ticketNumber || '')
  const [showResult, setShowResult] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (ticketNumber.trim()) {
      setShowResult(true)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'ready': return 'text-blue-600 bg-blue-100'
      case 'repairing': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (!showResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Tracking Servis</h1>
          <p className="text-gray-600 mb-6 text-center">Masukkan nomor tiket atau nomor HP Anda</p>
          <form onSubmit={handleTrack} className="space-y-4">
            <input
              type="text"
              value={ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value)}
              placeholder="Nomor Tiket / No. HP"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Lacak Sekarang
            </button>
          </form>
          <button onClick={() => navigate('/')} className="w-full mt-4 text-gray-600 hover:text-blue-600">Kembali ke Beranda</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">GANK.</div>
          <button onClick={() => setShowResult(false)} className="text-gray-600 hover:text-blue-600">Cari Lagi</button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{mockTicket.ticketNumber}</h1>
              <p className="text-gray-600">{mockTicket.customerName} • {mockTicket.device}</p>
            </div>
            <span className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(mockTicket.status)}`}>
              {mockTicket.timeline.find(t => !t.completed)?.name || 'Selesai'}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Keluhan:</h3>
            <p className="text-gray-600">{mockTicket.issue}</p>
          </div>

          {mockTicket.timeline.some(t => t.step === 3 && !t.completed) && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <p className="text-yellow-800 font-medium">Estimasi Biaya: {formatPrice(mockTicket.estimatedCost)}</p>
              <div className="flex gap-3 mt-3">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">Setuju</button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700">Tolak</button>
              </div>
            </div>
          )}

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {mockTicket.timeline.map((item) => (
                <div key={item.step} className="relative flex items-start gap-4">
                  <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                    item.completed ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {item.completed ? <CheckCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    {item.timestamp && <div className="text-sm text-gray-500">{item.timestamp}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackingPage
