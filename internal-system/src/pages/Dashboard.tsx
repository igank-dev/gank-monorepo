import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Wrench, 
  Package, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const mockStats = {
  totalTickets: 45,
  pendingTickets: 8,
  completedToday: 12,
  revenue: 15750000,
  inventoryCount: 23,
  lowStock: 5,
};

const recentTickets = [
  { id: 'TKT-001', customer: 'Budi Santoso', device: 'iPhone 11', issue: 'Ganti LCD', status: 'repairing', date: '2024-01-15' },
  { id: 'TKT-002', customer: 'Siti Aminah', device: 'Samsung A52', issue: 'Baterai Drop', status: 'pending', date: '2024-01-15' },
  { id: 'TKT-003', customer: 'Ahmad Rizki', device: 'Xiaomi Redmi Note 10', issue: 'Charging Port', status: 'ready', date: '2024-01-14' },
  { id: 'TKT-004', customer: 'Dewi Lestari', device: 'OPPO Reno 6', issue: 'Kamera Depan', status: 'completed', date: '2024-01-14' },
];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  diagnosing: 'bg-blue-100 text-blue-800',
  quoted: 'bg-purple-100 text-purple-800',
  approved: 'bg-green-100 text-green-800',
  repairing: 'bg-orange-100 text-orange-800',
  qc: 'bg-indigo-100 text-indigo-800',
  ready: 'bg-teal-100 text-teal-800',
  completed: 'bg-emerald-100 text-emerald-800',
  cancelled: 'bg-red-100 text-red-800',
};

const statusLabels: Record<string, string> = {
  pending: 'Menunggu',
  diagnosing: 'Diagnosa',
  quoted: 'Quotation',
  approved: 'Disetujui',
  repairing: 'Diperbaiki',
  qc: 'QC',
  ready: 'Siap Ambil',
  completed: 'Selesai',
  cancelled: 'Dibatalkan',
};

export default function Dashboard() {
  const { user } = useAuth();
  const [stats] = useState(mockStats);

  const statCards = [
    { label: 'Total Tiket', value: stats.totalTickets, icon: Wrench, color: 'bg-blue-500', roles: ['owner', 'admin', 'technician'] },
    { label: 'Menunggu', value: stats.pendingTickets, icon: Clock, color: 'bg-yellow-500', roles: ['owner', 'admin', 'technician'] },
    { label: 'Selesai Hari Ini', value: stats.completedToday, icon: CheckCircle, color: 'bg-green-500', roles: ['owner', 'admin', 'technician'] },
    { label: 'Pendapatan', value: `Rp ${stats.revenue.toLocaleString('id-ID')}`, icon: TrendingUp, color: 'bg-emerald-500', roles: ['owner', 'admin'] },
    { label: 'Stok HP', value: stats.inventoryCount, icon: Package, color: 'bg-primary', roles: ['owner', 'admin'] },
    { label: 'Stok Menipis', value: stats.lowStock, icon: AlertTriangle, color: 'bg-red-500', roles: ['owner', 'admin'] },
  ];

  const filteredStatCards = statCards.filter(card => 
    user && card.roles.includes(user.role)
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Selamat datang, {user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStatCards.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Tiket Servis Terbaru</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. Tiket</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keluhan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">{ticket.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.device}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.issue}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[ticket.status] || 'bg-gray-100 text-gray-800'}`}>
                      {statusLabels[ticket.status] || ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
