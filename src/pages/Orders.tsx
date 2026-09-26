import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Order {
  id: string
  name: string
  date: string
  amount: string
  status: 'Delivered' | 'In Transit' | 'Processing'
  serviceLine: 'radiopharma' | 'central-lab' | 'all'
}

export default function Orders() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<string>('all')

  const orders: Order[] = [
    {
      id: 'ORD-2026-001',
      name: 'Radiopharma Shipment',
      date: 'Delivered on Sept 20, 2026',
      amount: '$45,230',
      status: 'Delivered',
      serviceLine: 'radiopharma'
    },
    {
      id: 'ORD-2026-002',
      name: 'Central Lab Samples',
      date: 'In Transit since Sept 24, 2026',
      amount: '$12,450',
      status: 'In Transit',
      serviceLine: 'central-lab'
    },
    {
      id: 'ORD-2026-003',
      name: 'Radiopharma Rush',
      date: 'Processing',
      amount: '$28,900',
      status: 'Processing',
      serviceLine: 'radiopharma'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return '#27ae60'
      case 'In Transit':
        return '#3498db'
      case 'Processing':
        return '#f39c12'
      default:
        return '#666'
    }
  }

  const filteredOrders = orders.filter(order =>
    filter === 'all' || order.serviceLine === filter
  )

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/') }} style={{ color: '#461E96', textDecoration: 'none', cursor: 'pointer' }}>Home</a>
          <span>›</span>
          <span>All Orders</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 16px',
            background: '#f5f5f5',
            color: '#1a1a1a',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '24px',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = '#e0e0e0'
          }}
          onMouseOut={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = '#f5f5f5'
          }}
        >
          ← Back to Dashboard
        </button>

        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '8px', letterSpacing: '-0.8px', color: '#461E96' }}>
            All Orders
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Track all your orders across service lines
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '10px 16px',
              background: filter === 'all' ? '#461E96' : 'white',
              color: filter === 'all' ? 'white' : '#1a1a1a',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              if (filter !== 'all') {
                el.style.borderColor = '#461E96'
              }
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              if (filter !== 'all') {
                el.style.borderColor = '#e0e0e0'
              }
            }}
          >
            All Orders
          </button>
          <button
            onClick={() => setFilter('radiopharma')}
            style={{
              padding: '10px 16px',
              background: filter === 'radiopharma' ? '#f5f5f5' : 'white',
              color: '#1a1a1a',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            🔴 Radiopharma
          </button>
          <button
            onClick={() => setFilter('central-lab')}
            style={{
              padding: '10px 16px',
              background: filter === 'central-lab' ? '#f5f5f5' : 'white',
              color: '#1a1a1a',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            🔬 Central Lab
          </button>
        </div>

        {/* Orders Grid */}
        <div style={{ display: 'grid', gap: '12px' }}>
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              onClick={() => navigate('/tracking')}
              style={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.boxShadow = ''
                el.style.transform = ''
              }}
            >
              <div>
                <div style={{ fontWeight: '700', marginBottom: '4px' }}>
                  {order.id} - {order.name}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {order.date} • {order.amount}
                </div>
              </div>
              <span
                style={{
                  background: getStatusColor(order.status),
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '11px',
                  whiteSpace: 'nowrap',
                  marginLeft: '16px'
                }}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
