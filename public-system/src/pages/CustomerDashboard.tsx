import { useNavigate } from 'react-router-dom'

function CustomerDashboard() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">GANK.</div>
          <button onClick={() => navigate('/')} className="text-gray-600 hover:text-blue-600">Kembali</button>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Pelanggan</h1>
        <p className="text-gray-600">Login/Register akan segera hadir</p>
      </div>
    </div>
  )
}
export default CustomerDashboard
