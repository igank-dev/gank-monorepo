import { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const mockInventory = [
  { id: 'INV-001', device: 'iPhone 11', imei: '354829100234567', grade: 'A', buyPrice: 3500000, sellPrice: 4500000, status: 'listed' },
  { id: 'INV-002', device: 'Samsung A52', imei: '354829100234568', grade: 'B', buyPrice: 2000000, sellPrice: 2800000, status: 'qc' },
  { id: 'INV-003', device: 'Xiaomi Redmi Note 10', imei: '354829100234569', grade: 'A', buyPrice: 1500000, sellPrice: 2200000, status: 'listed' },
  { id: 'INV-004', device: 'OPPO Reno 6', imei: '354829100234570', grade: 'C', buyPrice: 1800000, sellPrice: 2500000, status: 'sold' },
];

const gradeColors: Record<string, string> = {
  A: 'bg-green-100 text-green-800',
  B: 'bg-yellow-100 text-yellow-800',
  C: 'bg-orange-100 text-orange-800',
};

const statusLabels: Record<string, string> = {
  incoming: 'Baru Masuk',
  qc: 'QC',
  listed: 'Dijual',
  sold: 'Terjual',
  returned: 'Retur',
};

export default function Inventori() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('all');

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventori HP Bekas</h1>
          <p className="text-gray-500 mt-1">Kelola stok dan grading perangkat</p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={20} />
          <span>Tambah Stok</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari device atau IMEI..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>
        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none bg-white"
        >
          <option value="all">Semua Grade</option>
          <option value="A">Grade A</option>
          <option value="B">Grade B</option>
          <option value="C">Grade C</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Device</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IMEI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Harga Beli</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Harga Jual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockInventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-primary">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.device}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.imei}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${gradeColors[item.grade]}`}>
                    {item.grade}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">Rp {item.buyPrice.toLocaleString('id-ID')}</td>
                <td className="px-6 py-4 text-sm text-gray-900">Rp {item.sellPrice.toLocaleString('id-ID')}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {statusLabels[item.status]}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-primary hover:text-secondary font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
