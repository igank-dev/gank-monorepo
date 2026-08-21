import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CatalogPage from './pages/CatalogPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ServiceBookingPage from './pages/ServiceBookingPage'
import TrackingPage from './pages/TrackingPage'
import TradeInPage from './pages/TradeInPage'
import CustomerDashboard from './pages/CustomerDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/katalog" element={<CatalogPage />} />
        <Route path="/katalog/:id" element={<ProductDetailPage />} />
        <Route path="/servis" element={<ServiceBookingPage />} />
        <Route path="/servis/track" element={<TrackingPage />} />
        <Route path="/trade-in" element={<TradeInPage />} />
        <Route path="/akun" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
