import { useNavigate } from 'react-router-dom'

export default function Tracking() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/') }} style={{ color: '#461E96', textDecoration: 'none', cursor: 'pointer' }}>Home</a>
          <span>›</span>
          <span>Tracking</span>
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
            Shipment Tracking
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Real-time tracking powered by ZoomLogi
          </p>
        </div>

        {/* Two-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          {/* Map Section */}
          <div style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '24px',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              flexDirection: 'column',
              minHeight: '350px'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📍</div>
              <div>Live Tracking Map</div>
              <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.8 }}>
                London → Amsterdam → Warsaw
              </div>
            </div>
          </div>

          {/* Tracking Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Current Location */}
            <div style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontWeight: '700', marginBottom: '8px' }}>Current Location</div>
              <div style={{ fontSize: '14px', marginBottom: '4px' }}>Amsterdam, Netherlands</div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                Customs clearance in progress
              </div>
            </div>

            {/* Temperature */}
            <div style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontWeight: '700', marginBottom: '8px' }}>Temperature</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '24px', fontWeight: '900', color: '#461E96' }}>
                  2.3°C
                </span>
                <span style={{
                  background: '#27ae60',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '11px'
                }}>
                  Within Range
                </span>
              </div>
            </div>

            {/* Alerts */}
            <div style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontWeight: '700', marginBottom: '12px' }}>⚠️ Alerts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                <div style={{
                  background: 'rgba(243, 156, 18, 0.1)',
                  padding: '8px',
                  borderRadius: '4px',
                  borderLeft: '3px solid #f39c12',
                  color: '#666'
                }}>
                  Minor humidity spike at 18:45 UTC (now normalized)
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontWeight: '700', marginBottom: '8px' }}>Milestones</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                <div>✓ Picked up - Sept 24, 10:30 AM</div>
                <div>✓ In transit - Sept 24, 2:15 PM</div>
                <div style={{ color: '#461E96', fontWeight: '600' }}>
                  → Customs - Sept 25, 6:45 AM (current)
                </div>
                <div style={{ color: '#666' }}>
                  → Delivery - Sept 26 (expected)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
