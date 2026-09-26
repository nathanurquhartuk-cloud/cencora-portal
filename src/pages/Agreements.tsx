import { useNavigate } from 'react-router-dom'

export default function Agreements() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/') }} style={{ color: '#461E96', textDecoration: 'none', cursor: 'pointer' }}>Home</a>
          <span>›</span>
          <span>Agreements</span>
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
            Service Agreements
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Your current contracts and service tiers
          </p>
        </div>

        {/* Agreements Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          {/* Radiopharma Agreement */}
          <div style={{
            background: 'white',
            border: '2px solid #461E96',
            borderRadius: '8px',
            padding: '24px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                  Radiopharma Service Agreement
                </h3>
                <p style={{ color: '#666', fontSize: '13px' }}>
                  Critical Tier with Strict Pick up and Delivery
                </p>
              </div>
              <span style={{
                background: '#27ae60',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '11px'
              }}>
                Active
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              fontSize: '13px',
              marginBottom: '16px'
            }}>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Start Date</div>
                <div style={{ fontWeight: '600' }}>Jul 1, 2026</div>
              </div>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Renewal Date</div>
                <div style={{ fontWeight: '600' }}>Dec 31, 2027</div>
              </div>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Response Time SLA</div>
                <div style={{ fontWeight: '600' }}>30 minutes</div>
              </div>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Volume Commitment</div>
                <div style={{ fontWeight: '600' }}>150+ units/month</div>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #e0e0e0',
              marginTop: '16px',
              paddingTop: '16px'
            }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                Regulatory Compliance & Envelope
              </div>
              <div style={{ fontSize: '12px', lineHeight: '1.8', marginBottom: '16px' }}>
                <div>✓ Class 7 dangerous goods certification (UN2915)</div>
                <div>✓ Type A packaging - IATA & ADR compliant</div>
                <div>✓ Strict pick-up and delivery windows (3-hour enforced)</div>
                <div>✓ 24/7 dedicated vehicle and contingency support</div>
                <div>✓ Real-time GPS tracking via ZoomLogi</div>
              </div>

              <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                Value Promise
              </div>
              <div style={{ fontSize: '12px', lineHeight: '1.8' }}>
                <div>✓ Time-definite delivery inside the decay window</div>
                <div>✓ Fully compliant, no manual steps in the chain</div>
                <div>✓ Integrated DG & regulatory compliance</div>
                <div>✓ 98% on-time delivery guarantee</div>
              </div>
            </div>
          </div>

          {/* Central Lab Agreement */}
          <div style={{
            background: 'white',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            padding: '24px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                  Central Lab Logistics Agreement
                </h3>
                <p style={{ color: '#666', fontSize: '13px' }}>
                  Assured Tier Bundle
                </p>
              </div>
              <span style={{
                background: '#27ae60',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '11px'
              }}>
                Active
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              fontSize: '13px',
              marginBottom: '16px'
            }}>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Start Date</div>
                <div style={{ fontWeight: '600' }}>Mar 15, 2026</div>
              </div>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Renewal Date</div>
                <div style={{ fontWeight: '600' }}>Mar 15, 2027</div>
              </div>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Response Time SLA</div>
                <div style={{ fontWeight: '600' }}>2 hours</div>
              </div>
              <div>
                <div style={{ color: '#666', marginBottom: '4px' }}>Volume Commitment</div>
                <div style={{ fontWeight: '600' }}>200+ units/month</div>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid #e0e0e0',
              marginTop: '16px',
              paddingTop: '16px'
            }}>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                Service Envelope & Coverage
              </div>
              <div style={{ fontSize: '12px', lineHeight: '1.8', marginBottom: '16px' }}>
                <div>✓ Biological samples to central or specialty lab</div>
                <div>✓ Ambient to frozen temperature ranges</div>
                <div>✓ High-volume small consignments, stability-windowed</div>
                <div>✓ IATA Class 6.2 classification & compliance</div>
                <div>✓ Real-time monitoring via ZoomLogi</div>
              </div>

              <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                Value Promise
              </div>
              <div style={{ fontSize: '12px', lineHeight: '1.8' }}>
                <div>✓ Sample integrity within stability window</div>
                <div>✓ Assured tier (2-hour response) - included</div>
                <div>✓ Critical tier (30-minute response) available</div>
                <div>✓ Chain of custody documentation</div>
                <div>✓ 96% on-time delivery guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
