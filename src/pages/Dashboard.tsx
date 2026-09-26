import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pill, Microscope, Box, Zap, TrendingUp, Lock, Plus } from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['radiopharma']))

  const serviceLines = [
    { id: 'radiopharma', name: 'Radiopharma', icon: Pill, active: true, tiers: ['Critical Tier', 'Strict Pick up and Delivery'] },
    { id: 'centrallab', name: 'Central Lab Logistics', icon: Microscope, active: true, tiers: ['Standard (4-6 hr)', 'Assured (2 hr)', 'Critical (30 min)'] },
    { id: 'biospecimen', name: 'Biospecimen', icon: Box, active: false },
    { id: 'temperature', name: 'Temperature Controlled', icon: Zap, active: false },
    { id: 'clinical', name: 'Clinical Trial Materials', icon: TrendingUp, active: false },
    { id: 'hazmat', name: 'Hazmat / Restricted', icon: Lock, active: false }
  ]

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
            Your Service Lines
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {serviceLines.map((sl) => {
              const Icon = sl.icon
              return (
                <div key={sl.id} style={{
                  background: sl.active ? 'white' : '#fafafa',
                  border: sl.active ? '2px solid #e0e0e0' : '2px solid #e0e0e0',
                  borderLeft: sl.active ? '5px solid #461E96' : '5px solid #999',
                  borderRadius: '8px',
                  padding: '16px',
                  cursor: sl.active ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                  opacity: sl.active ? 1 : 0.8
                }} onMouseOver={(e) => {
                  if (sl.active) {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.boxShadow = '0 4px 12px rgba(70,30,150,0.15)'
                    el.style.transform = 'translateY(-2px)'
                  }
                }} onMouseOut={(e) => {
                  if (sl.active) {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.boxShadow = ''
                    el.style.transform = ''
                  }
                }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: sl.active ? 'rgba(70,30,150,0.1)' : '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color={sl.active ? '#461E96' : '#999'} strokeWidth={1.5} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '4px' }}>{sl.name}</div>
                      <div style={{ fontSize: '11px', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: sl.active ? '#27ae60' : '#ccc' }}></span>
                        {sl.active ? 'Active Agreement' : 'Not Subscribed'}
                      </div>
                    </div>
                  </div>
                  {sl.active && sl.tiers && (
                    <div style={{ margin: '12px 0', padding: '12px 0', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
                      <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px' }}>
                        Available Tiers
                      </div>
                      {sl.tiers.map((tier) => (
                        <div key={tier} style={{ fontSize: '12px', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px', color: '#461E96', fontWeight: '600' }}>
                          <span>✓</span><span>{tier}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                    {sl.active ? (
                      <>
                        <button
                          onClick={() => navigate(`/place-order?service=${encodeURIComponent(sl.name)}`)}
                          style={{ flex: 1, padding: '10px 16px', borderRadius: '6px', border: 'none', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: '#461E96', color: 'white' }}
                        >
                          Place Order
                        </button>
                        <button
                          onClick={() => navigate('/orders')}
                          style={{ flex: 1, padding: '10px 16px', borderRadius: '6px', border: '1px solid #e0e0e0', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: 'white', color: '#1a1a1a' }}
                        >
                          View Orders
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => navigate('/agreements')}
                        style={{ flex: 1, padding: '10px 16px', borderRadius: '6px', border: 'none', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: '#f0f0f0', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                      >
                        <Plus size={14} /> Request Access
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Portfolio Summary Metrics */}
        <h3 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
          Portfolio Summary
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}
               onClick={() => navigate('/orders')}>
            <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>
              📋 Active Orders
            </div>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px', color: '#461E96' }}>24</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Across all service lines</div>
          </div>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}
               onClick={() => navigate('/invoices')}>
            <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '600' }}>
              📄 Outstanding Invoices
            </div>
            <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '8px', color: '#461E96' }}>7</div>
            <div style={{ fontSize: '12px', color: '#666' }}>$94,250 due</div>
          </div>
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '16px', cursor: 'pointer' }}
               onClick={() => navigate('/tracking')}>
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

        {serviceLines.filter(sl => sl.active).map((sl) => {
          const Icon = sl.icon
          const performanceData = {
            radiopharma: { orders: 8, avgValue: '$15.2K', onTime: '98%', spend: '$121K' },
            centrallab: { orders: 16, avgValue: '$8.4K', onTime: '96%', spend: '$255K' }
          }
          const data = performanceData[sl.id as keyof typeof performanceData] || { orders: 12, avgValue: '$10K', onTime: '97%', spend: '$150K' }

          return (
            <div key={sl.id} style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden' }}>
              <div
                style={{
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  borderLeft: expandedSections.has(sl.id) ? '4px solid #461E96' : '4px solid transparent',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => toggleSection(sl.id)}
                onMouseOver={(e) => (e.currentTarget as HTMLDivElement).style.background = '#f5f5f5'}
                onMouseOut={(e) => (e.currentTarget as HTMLDivElement).style.background = 'white'}
              >
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(70,30,150,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} color="#461E96" strokeWidth={1.5} />
                  </div>
                  <span>{sl.name} Overview</span>
                </div>
                <div style={{ fontSize: '16px', transition: 'transform 0.2s ease', transform: expandedSections.has(sl.id) ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</div>
              </div>
              {expandedSections.has(sl.id) && (
                <div style={{ maxHeight: '2000px', overflow: 'hidden', transition: 'max-height 0.3s ease', borderTop: '1px solid #e0e0e0' }}>
                  <div style={{ padding: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                      <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Active Orders</div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#461E96' }}>{data.orders}</div>
                      </div>
                      <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Avg Order Value</div>
                        <div style={{ fontSize: '20px', fontWeight: '700' }}>{data.avgValue}</div>
                      </div>
                      <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>On-Time Rate</div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#27ae60' }}>{data.onTime}</div>
                      </div>
                      <div style={{ padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
                        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Monthly Spend</div>
                        <div style={{ fontSize: '20px', fontWeight: '700' }}>{data.spend}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
