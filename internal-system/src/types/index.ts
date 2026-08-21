export type UserRole = 'owner' | 'admin' | 'technician';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
  created_at: string;
}

export interface Customer {
  id: string;
  user_id?: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  id_card_number?: string;
  created_at: string;
}

export interface DeviceModel {
  id: string;
  brand_id: string;
  model_name: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface InventoryDevice {
  id: string;
  device_model_id: string;
  imei: string;
  condition_grade: 'A' | 'B' | 'C';
  buy_price: number;
  sell_price: number;
  status: 'incoming' | 'qc' | 'listed' | 'sold' | 'returned';
  trade_in_customer_id?: string;
  created_at?: string;
}

export interface RepairTicket {
  id: string;
  ticket_number: string;
  customer_id: string;
  device_model_id: string;
  imei: string;
  issue_description: string;
  estimated_cost?: number;
  status: 'pending' | 'diagnosing' | 'quoted' | 'approved' | 'repairing' | 'qc' | 'ready' | 'completed' | 'cancelled';
  technician_id?: string;
  admin_id?: string;
  warranty_days?: number;
  created_at: string;
}

export interface TicketChecklist {
  id: string;
  ticket_id: string;
  type: 'initial' | 'final';
  item_name: string;
  is_passed: boolean;
  notes?: string;
}

export interface TicketEvidence {
  id: string;
  ticket_id: string;
  type: 'before' | 'during' | 'after';
  file_url: string;
  uploaded_by: string;
}

export interface SparepartUsage {
  id: string;
  ticket_id: string;
  sparepart_id: string;
  quantity: number;
  total_price: number;
}

export interface SalesOrder {
  id: string;
  order_number: string;
  customer_id: string;
  total_amount: number;
  restocking_fee?: number;
  final_amount: number;
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'returned';
  payment_method?: string;
  created_at?: string;
}

export interface SalesOrderItem {
  id: string;
  order_id: string;
  inventory_device_id: string;
  price: number;
}

export interface Payment {
  id: string;
  reference_id: string;
  payment_type: 'repair_dp' | 'repair_full' | 'sales_purchase' | 'refund';
  amount: number;
  status: 'pending' | 'success' | 'failed';
  gateway_ref?: string;
  created_at: string;
}

export interface BastRecord {
  id: string;
  reference_type: 'repair' | 'trade_in';
  reference_id: string;
  physical_condition_notes: string;
  factory_reset_agreed: boolean;
  customer_signature_url?: string;
  created_at: string;
}

export interface TradeInRecord {
  id: string;
  customer_id: string;
  device_model_id: string;
  imei: string;
  appraised_price: number;
  status: 'pending' | 'approved' | 'rejected_icloud';
  created_at: string;
}

export interface Setting {
  id: string;
  key: string;
  value: string | number;
}
