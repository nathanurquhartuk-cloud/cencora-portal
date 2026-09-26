import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Invoice {
  id: string
  date: string
  status: 'Paid' | 'Pending'
  amount: string
  dueDate: string
  items: Array<{
    description: string
    qty: number
    price: string
  }>
}

export default function Invoices() {
  const navigate = useNavigate()
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string>('INV-2026-001')

  const invoices: Record<string, Invoice> = {
    'INV-2026-001': {
      id: 'INV-2026-001',
      date: 'September 20, 2026',
      status: 'Paid',
      amount: '$45,230.00',
      dueDate: 'October 5, 2026',
      items: [
        { description: 'Radiopharma Shipment (Critical Tier)', qty: 1, price: '$45,230.00' }
      ]
    },
    'INV-2026-002': {
      id: 'INV-2026-002',
      date: 'September 18, 2026',
      status: 'Paid',
      amount: '$12,450.50',
      dueDate: 'October 3, 2026',
      items: [
        { description: 'Central Lab Samples (Assured Tier)', qty: 15, price: '$12,450.50' }
      ]
    },
    'INV-2026-003': {
      id: 'INV-2026-003',
      date: 'September 15, 2026',
      status: 'Pending',
      amount: '$28,900.00',
      dueDate: 'September 30, 2026',
      items: [
        { description: 'Radiopharma Rush Service (Critical Tier)', qty: 1, price: '$28,900.00' }
      ]
    }
  }

  const selectedInvoice = invoices[selectedInvoiceId]

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/') }} style={{ color: '#461E96', textDecoration: 'none', cursor: 'pointer' }}>Home</a>
          <span>›</span>
          <span>Invoices</span>
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
            Invoices
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            View and manage all your invoices
          </p>
        </div>

        {/* Two-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
          {/* Invoice List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.entries(invoices).map(([key, invoice]) => (
              <div
                key={key}
                onClick={() => setSelectedInvoiceId(key)}
                style={{
                  background: selectedInvoiceId === key ? '#461E96' : 'white',
                  color: selectedInvoiceId === key ? 'white' : '#1a1a1a',
                  padding: '12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: selectedInvoiceId === key ? '2px solid #461E96' : '1px solid #e0e0e0',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  if (selectedInvoiceId !== key) {
                    el.style.background = '#f5f5f5'
                  }
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  if (selectedInvoiceId !== key) {
                    el.style.background = 'white'
                  }
                }}
              >
                <div style={{ fontWeight: '700' }}>{invoice.id}</div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>{invoice.date}</div>
              </div>
            ))}
          </div>

          {/* Invoice Detail */}
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '24px'
          }}>
            {selectedInvoice ? (
              <div>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px'
                }}>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: '900', marginBottom: '4px' }}>
                      {selectedInvoice.id}
                    </div>
                    <div style={{ color: '#666', fontSize: '13px' }}>
                      {selectedInvoice.date}
                    </div>
                  </div>
                  <span style={{
                    background: selectedInvoice.status === 'Paid' ? '#27ae60' : '#f39c12',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '11px'
                  }}>
                    {selectedInvoice.status}
                  </span>
                </div>

                {/* Details */}
                <div style={{
                  borderTop: '1px solid #e0e0e0',
                  paddingTop: '16px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <span style={{ color: '#666' }}>Invoice Date:</span>
                    <span>{selectedInvoice.date}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <span style={{ color: '#666' }}>Due Date:</span>
                    <span>{selectedInvoice.dueDate}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <span style={{ color: '#666' }}>Total Amount:</span>
                    <span style={{ fontWeight: '700' }}>{selectedInvoice.amount}</span>
                  </div>
                </div>

                {/* Line Items */}
                <div style={{
                  borderTop: '1px solid #e0e0e0',
                  paddingTop: '16px'
                }}>
                  <div style={{ fontWeight: '700', marginBottom: '12px' }}>Line Items</div>
                  {selectedInvoice.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '8px 0',
                        borderBottom: '1px solid #e0e0e0',
                        fontSize: '13px'
                      }}
                    >
                      <span>{item.description}</span>
                      <span style={{ fontWeight: '600' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: '#666' }}>
                Select an invoice to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
