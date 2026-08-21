import { useParams, useNavigate } from 'react-router-dom'
import { Smartphone, Shield, Check } from 'lucide-react'

const mockProduct = {
  id: 1,
  name: 'iPhone 13 Pro 128GB',
  price: 12500000,
  grade: 'A',
  warranty: '7 Hari Garansi Mesin',
  ram: '6GB',
  storage: '128GB',
  color: 'Graphite',
  batteryHealth: '95%',
  description: 'Kondisi mulus seperti baru, tidak ada lecet. Baterai masih sehat. Semua fungsi normal.',
  imei: '356789*****12345',
}

function ProductDetailPage() {
  useParams()
  const navigate = useNavigate()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">GANK.</div>
          <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-blue-600">Kembali</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <Smartphone className="w-48 h-48 text-gray-400" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200">
                  <Smartphone className="w-8 h-8 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
              mockProduct.grade === 'A' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>Grade {mockProduct.grade}</span>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{mockProduct.name}</h1>
            <p className="text-gray-600 mb-4">{mockProduct.description}</p>
            
            <div className="text-4xl font-bold text-blue-600 mb-6">{formatPrice(mockProduct.price)}</div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{mockProduct.warranty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">IMEI Terverified: {mockProduct.imei}</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 mb-6">
              <h3 className="font-semibold mb-3">Spesifikasi</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-gray-500">RAM:</span> <span className="font-medium">{mockProduct.ram}</span></div>
                <div><span className="text-gray-500">Storage:</span> <span className="font-medium">{mockProduct.storage}</span></div>
                <div><span className="text-gray-500">Warna:</span> <span className="font-medium">{mockProduct.color}</span></div>
                <div><span className="text-gray-500">Battery Health:</span> <span className="font-medium">{mockProduct.batteryHealth}</span></div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
                Beli Sekarang
              </button>
              <button 
                onClick={() => navigate('/trade-in')}
                className="w-full bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Ajukan Trade-In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
