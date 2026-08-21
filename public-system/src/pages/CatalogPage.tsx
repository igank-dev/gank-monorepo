import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Filter, Smartphone } from 'lucide-react'

const mockProducts = [
  { id: 1, name: 'iPhone 13 Pro 128GB', price: 12500000, grade: 'A', warranty: '7 Hari', image: '📱', ram: '6GB', storage: '128GB' },
  { id: 2, name: 'Samsung S22 Ultra', price: 11000000, grade: 'A', warranty: '7 Hari', image: '📱', ram: '12GB', storage: '256GB' },
  { id: 3, name: 'iPhone 12 64GB', price: 8500000, grade: 'B', warranty: '7 Hari', image: '📱', ram: '4GB', storage: '64GB' },
  { id: 4, name: 'Xiaomi 13T Pro', price: 7500000, grade: 'A', warranty: '14 Hari', image: '📱', ram: '12GB', storage: '256GB' },
  { id: 5, name: 'OPPO Find X5', price: 6000000, grade: 'B', warranty: '7 Hari', image: '📱', ram: '8GB', storage: '256GB' },
  { id: 6, name: 'iPhone 11 64GB', price: 5500000, grade: 'C', warranty: '7 Hari', image: '📱', ram: '4GB', storage: '64GB' },
]

function CatalogPage() {
  const navigate = useNavigate()
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 15000000])
  const [selectedGrade, setSelectedGrade] = useState('all')

  const filteredProducts = mockProducts.filter(product => {
    if (selectedBrand !== 'all' && !product.name.includes(selectedBrand)) return false
    if (selectedGrade !== 'all' && product.grade !== selectedGrade) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">GANK.</div>
          <button onClick={() => navigate('/')} className="text-gray-600 hover:text-blue-600">Kembali</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Katalog HP Bekas</h1>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold">Filter</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Merk</label>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Semua Merk</option>
                <option value="iPhone">Apple iPhone</option>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="OPPO">OPPO</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grade Kondisi</label>
              <select 
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Semua Grade</option>
                <option value="A">Grade A (Mulus)</option>
                <option value="B">Grade B (Lecet Halus)</option>
                <option value="C">Grade C (Lecet Kasar)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Harga Maksimal</label>
              <input 
                type="range" 
                min="0" 
                max="15000000" 
                step="500000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="text-sm text-gray-600 mt-1">Hingga {formatPrice(priceRange[1])}</div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/katalog/${product.id}`)}
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-gray-400" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    product.grade === 'A' ? 'bg-green-100 text-green-700' :
                    product.grade === 'B' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>Grade {product.grade}</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">{product.ram} RAM • {product.storage} Storage</div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-blue-600">{formatPrice(product.price)}</div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.warranty} Garansi</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Tidak ada produk yang sesuai dengan filter Anda</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CatalogPage
