import { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const mockTickets = [
  { id: 'TKT-001', customer: 'Budi Santoso', device: 'iPhone 11', imei: '354829100234567', issue: 'Ganti LCD', status: 'repairing', date: '2024-01-15', technician: 'Ahmad' },
  { id: 'TKT-002', customer: 'Siti Aminah', device: 'Samsung A52', imei: '354829100234568', issue: 'Baterai Drop', status: 'pending', date: '2024-01-15', technician: '-' },
  { id: 'TKT-003', customer: 'Ahmad Rizki', device: 'Xiaomi Redmi Note 10', imei: '354829100234569', issue: 'Charging Port', status: 'ready', date: '2024-01-14', technician: 'Ahmad' },
  { id: 'TKT-004', customer: 'Dewi Lestari', device: 'OPPO Reno 6', imei: '354829100234570', issue: 'Kamera Depan', status: 'completed', date: '2024-01-14', technician: 'Budi' },
  { id: 'TKT-005', customer: 'Eko Prasetyo', device: 'Vivo V21', imei: '354829100234571', issue: 'Speaker Mati', status: 'diagnosing', date: '2024-01-13', technician: 'Ahmad' },
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

export default function Servis() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTickets = mockTickets.filter(ticket => {
    const matchesSearch = ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.device.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Servis</h1>
          <p className="text-gray-500 mt-1">Kelola tiket servis pelanggan</p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={20} />
          <span>Tiket Baru</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari no. tiket, customer, atau device..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none bg-white"
          >
            <option value="all">Semua Status</option>
            <option value="pending">Menunggu</option>
            <option value="diagnosing">Diagnosa</option>
            <option value="repairing">Diperbaiki</option>
            <option value="ready">Siap Ambil</option>
            <option value="completed">Selesai</option>
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. Tiket</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device & IMEI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keluhan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teknisi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">{ticket.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ticket.device}</div>
                    <div className="text-xs text-gray-500">{ticket.imei}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.issue}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.technician}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[ticket.status]}`}>
                      {statusLabels[ticket.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-primary hover:text-secondary font-medium">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
