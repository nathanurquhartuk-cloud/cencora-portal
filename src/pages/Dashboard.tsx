import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['radiopharma']))

  const toggleSection = (id: string) => {
    const newSet = new Set(expandedSections)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setExpandedSections(newSet)
  }

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
          <span>Home</span>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '8px', letterSpacing: '-0.8px', color: '#461E96' }}>
            Orders & Accounts
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Manage shipments, invoices, and agreements across your service lines
          </p>
        </div>

        {/* Agreement Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(70,30,150,0.05), rgba(70,30,150,0.02))',
          border: '1px solid #461E96',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>Active Service Agreements</h3>
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ background: '#461E96', color: 'white', padding: '2px 8px', borderRadius: '3px', fontWeight: '600', fontSize: '11px' }}>Radiopharma</span>
                <span>Critical Tier + Strict Pick up and Delivery</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ background: '#461E96', color: 'white', padding: '2px 8px', borderRadius: '3px', fontWeight: '600', fontSize: '11px' }}>Central Lab</span>
                <span>Assured Tier Bundle</span>
              </div>
            </div>
          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/agreements') }}
             style={{ color: '#461E96', textDecoration: 'none', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            View all agreements →
          </a>
        </div>

        {/* Active Service Lines */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
            Active Service Lines
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {/* Radiopharma */}
            <div style={{
              background: 'white',
              border: '2px solid #e0e0e0',
              borderLeft: '5px solid #461E96',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }} onMouseOver={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 4px 12px rgba(70,30,150,0.15)'
              el.style.transform = 'translateY(-2px)'
            }} onMouseOut={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = ''
              el.style.transform = ''
            }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ fontSize: '24px' }}>🔴</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '4px' }}>Radiopharma</div>
                  <div style={{ fontSize: '11px', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27ae60' }}></span>
                    Active Agreement
                  </div>
                </div>
              </div>
              <div style={{ margin: '12px 0', padding: '12px 0', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Your Tier
                </div>
                <div style={{ fontSize: '12px', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px', color: '#461E96', fontWeight: '600' }}>
                  <span>✓</span><span>Critical Tier</span>
                </div>
                <div style={{ fontSize: '12px', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px', color: '#461E96', fontWeight: '600', marginTop: '4px' }}>
                  <span>✓</span><span>Strict Pick up and Delivery</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <button
                  className="btn-primary"
                  onClick={() => onNavigate('placeOrder', { service: 'Radiopharma' })}
                  style={{ flex: 1, padding: '10px 16px', borderRadius: '6px', border: 'none', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: '#461E96', color: 'white' }}
                >
                  Place Order
                </button>
                <button
                  onClick={() => onNavigate('orders')}
                  style={{ flex: 1, padding: '10px 16px', borderRadius: '6px', border: '1px solid #e0e0e0', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: 'white', color: '#1a1a1a' }}
                >
                  View Orders
                </button>
              </div>
            </div>

            {/* Central Lab Logistics */}
            <div style={{
              background: 'white',
              border: '2px solid #e0e0e0',
              borderLeft: '5px solid #461E96',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }} onMouseOver={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 4px 12px rgba(70,30,150,0.15)'
              el.style.transform = 'translateY(-2px)'
            }} onMouseOut={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = ''
              el.style.transform = ''
            }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ fontSize: '24px' }}>🔬</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '4px' }}>Central Lab Logistics</div>
                  <div style={{ fontSize: '11px', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27ae60' }}></span>
                    Active Agreement
                  </div>
                </div>
              </div>
              <div style={{ margin: '12px 0', padding: '12px 0', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
                <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px' }}>
                  Your Available Tiers
                </div>
                <div style={{ fontSize: '12px', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px', color: '#461E96', fontWeight: '600' }}>
                  <span>✓</span><span>Standard (4-6 hour response)</span>
                </div>
                <div style={{ fontSize: '12px', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px', color: '#461E96', fontWeight: '600', marginTop: '4px' }}>
                  <span>✓</span><span>Assured (2-hour response)</span>
                </div>
                <div style={{ fontSize: '12px', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px', color: '#461E96', fontWeight: '600', marginTop: '4px' }}>
                  <span>✓</span><span>Critical (30-minute response)</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <button
                  onClick={() => onNavigate('placeOrder', { service: 'Central Lab Logistics' })}
                  style={{ flex: 1, padding: '10px 16px', borderRadius: '6px', border: 'none', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: '#461E96', color: 'white' }}
                >
                  Place Order
                </button>
                <button
                  onClick={() => onNavigate('orders')}
                  style={{ flex: 1, padding: '10px 16px', borderRadius: '6px', border: '1px solid #e0e0e0', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: 'white', color: '#1a1a1a' }}
                >
                  View Orders
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Summary Metrics */}
        <h3 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
          Portfolio Summary
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}
               onClick={() => onNavigate('orders')}>
            <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>
              📋 Active Orders
            </div>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px', color: '#461E96' }}>24</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Across all service lines</div>
          </div>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}
               onClick={() => onNavigate('invoices')}>
            <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>
              📄 Outstanding Invoices
            </div>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px', color: '#461E96' }}>7</div>
            <div style={{ fontSize: '12px', color: '#666' }}>$94,250 due</div>
          </div>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}
               onClick={() => onNavigate('tracking')}>
            <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>
              🚚 In Transit
            </div>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px', color: '#461E96' }}>12</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Track via ZoomLogi</div>
          </div>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>
              💰 YTD Spend
            </div>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px', color: '#461E96' }}>$1.2M</div>
            <div style={{ fontSize: '12px', color: '#666' }}>22% vs last year</div>
          </div>
        </div>

        {/* Service Line Performance */}
        <h3 style={{ fontSize: '12px', fontWeight: '700', marginTop: '32px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
          Service Line Performance
        </h3>

        {/* Radiopharma Collapsible */}
        <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden' }}>
          <div
            style={{
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              borderLeft: expandedSections.has('radiopharma') ? '4px solid #461E96' : '4px solid transparent',
              transition: 'all 0.2s ease'
            }}
            onClick={() => toggleSection('radiopharma')}
            onMouseOver={(e) => (e.currentTarget as HTMLDivElement).style.background = '#f5f5f5'}
            onMouseOut={(e) => (e.currentTarget as HTMLDivElement).style.background = 'white'}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span>🔴</span>
              <span>Radiopharma Overview</span>
            </div>
            <div style={{ fontSize: '16px', transition: 'transform 0.2s ease', transform: expandedSections.has('radiopharma') ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</div>
          </div>
          {expandedSections.has('radiopharma') && (
            <div style={{ maxHeight: '2000px', overflow: 'hidden', transition: 'max-height 0.3s ease', borderTop: '1px solid #e0e0e0' }}>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Active Orders</div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#461E96' }}>8</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Avg Order Value</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>$15.2K</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>On-Time Rate</div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#27ae60' }}>98%</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Monthly Spend</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>$121K</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Central Lab Collapsible */}
        <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden' }}>
          <div
            style={{
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              borderLeft: expandedSections.has('centrallab') ? '4px solid #461E96' : '4px solid transparent',
              transition: 'all 0.2s ease'
            }}
            onClick={() => toggleSection('centrallab')}
            onMouseOver={(e) => (e.currentTarget as HTMLDivElement).style.background = '#f5f5f5'}
            onMouseOut={(e) => (e.currentTarget as HTMLDivElement).style.background = 'white'}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span>🔬</span>
              <span>Central Lab Logistics Overview</span>
            </div>
            <div style={{ fontSize: '16px', transition: 'transform 0.2s ease', transform: expandedSections.has('centrallab') ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</div>
          </div>
          {expandedSections.has('centrallab') && (
            <div style={{ maxHeight: '2000px', overflow: 'hidden', transition: 'max-height 0.3s ease', borderTop: '1px solid #e0e0e0' }}>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Active Orders</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>16</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Avg Order Value</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>$8.4K</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>On-Time Rate</div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#27ae60' }}>96%</div>
                  </div>
                  <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Monthly Spend</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>$255K</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
