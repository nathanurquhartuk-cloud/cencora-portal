import { useNavigate } from 'react-router-dom'

export default function Agreements() {
  const navigate = useNavigate()

  const serviceAgreements = [
    {
      id: 'radiopharma',
      name: 'Radiopharma',
      shortDesc: 'Time-critical radiopharmaceutical logistics',
      status: 'active',
      tier: 'Critical Tier with Strict Pick up and Delivery',
      startDate: 'Jul 1, 2026',
      renewalDate: 'Dec 31, 2027',
      sla: '30 minutes',
      volume: '150+ units/month',
      capabilities: [
        'Class 7 expertise',
        'Patient-specific deliveries',
        'Global regulatory support',
        'Dedicated handling',
        '24/7 control tower',
        'Full audit trail'
      ],
      compliance: [
        'Class 7 dangerous goods certification (UN2915)',
        'Type A packaging - IATA & ADR compliant',
        'Strict pick-up and delivery windows (3-hour enforced)',
        '24/7 dedicated vehicle and contingency support',
        'Real-time GPS tracking via ZoomLogi'
      ],
      valuePromise: [
        'Time-definite delivery inside the decay window',
        'Fully compliant, no manual steps in the chain',
        'Integrated DG & regulatory compliance',
        '98% on-time delivery guarantee'
      ]
    },
    {
      id: 'centrallab',
      name: 'Central Lab Logistics & Biostorage',
      shortDesc: 'Biosample logistics and integrated biostorage',
      status: 'active',
      tier: 'Assured Tier Bundle',
      startDate: 'Mar 15, 2026',
      renewalDate: 'Mar 15, 2027',
      sla: '2 hours',
      volume: '200+ units/month',
      capabilities: [
        'Sample collection and transport',
        'Biorepository and biostorage',
        'Ambient, frozen, cryogenic',
        'Global lab network support',
        'Integrated visibility'
      ],
      coverage: [
        'Biological samples to central or specialty lab',
        'Ambient to frozen temperature ranges',
        'High-volume small consignments, stability-windowed',
        'IATA Class 6.2 classification & compliance',
        'Real-time monitoring via ZoomLogi'
      ],
      valuePromise: [
        'Sample integrity within stability window',
        'Assured tier (2-hour response) included',
        'Critical tier (30-minute response) available',
        'Chain of custody documentation',
        '96% on-time delivery guarantee'
      ]
    }
  ]

  const availableServices = [
    {
      name: 'Cell & Gene Therapies',
      shortDesc: 'Autonomous, allogeneic and emerging therapies',
      capabilities: [
        'Cryogenic and ultra-low temp',
        'Chain of identity and custody',
        'Patient-centric logistics',
        'Genetic information',
        'Specialist handling'
      ]
    },
    {
      name: 'Warehouse',
      shortDesc: 'Storage, inventory management and fulfillment solutions',
      capabilities: [
        'Secure storage (ambient/frozen)',
        'Inventory management',
        'Receipt, pick, pack and ship',
        'Returns and destruction',
        'Integration with supply logistics'
      ]
    },
    {
      name: 'Clinical Supply Logistics',
      shortDesc: 'Logistics for clinical trial materials',
      capabilities: [
        'IMPs, AIMs, comparators, ancillary supplies, devices',
        'Depot, site and investigator shipments',
        'Temp-controlled transport',
        'Global regulatory expertise'
      ]
    },
    {
      name: 'Commercial Supply Logistics',
      shortDesc: 'Logistics for commercial pharmaceutical and healthcare products',
      capabilities: [
        'Finished goods distribution',
        'Distribution and replenishment',
        'Regulated and non-regulated products',
        'Temperature-controlled',
        'Global network and compliance',
        'Time-critical and charter'
      ]
    },
    {
      name: 'Specialty Logistics',
      shortDesc: 'Complex, high-value and specialized commodities',
      capabilities: [
        'Medical devices and equipment',
        'Biological materials and CAD (>CAD)',
        'Aerospace, aircraft parts',
        'Time-critical and charter',
        'Project and event logistics'
      ]
    }
  ]

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
            Your current contracts and available service offerings
          </p>
        </div>

        {/* Active Agreements */}
        <h2 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
          Active Service Agreements
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '48px' }}>
          {serviceAgreements.map((agreement) => (
            <div key={agreement.id} style={{
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
                    {agreement.name}
                  </h3>
                  <p style={{ color: '#999', fontSize: '13px', marginBottom: '4px' }}>
                    {agreement.shortDesc}
                  </p>
                  <p style={{ color: '#666', fontSize: '13px' }}>
                    {agreement.tier}
                  </p>
                </div>
                <span style={{
                  background: '#27ae60',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '11px',
                  whiteSpace: 'nowrap'
                }}>
                  Active
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                fontSize: '13px',
                marginBottom: '24px'
              }}>
                <div>
                  <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', fontWeight: '600' }}>START DATE</div>
                  <div style={{ fontWeight: '600' }}>{agreement.startDate}</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', fontWeight: '600' }}>RENEWAL DATE</div>
                  <div style={{ fontWeight: '600' }}>{agreement.renewalDate}</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', fontWeight: '600' }}>RESPONSE TIME SLA</div>
                  <div style={{ fontWeight: '600' }}>{agreement.sla}</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', fontWeight: '600' }}>VOLUME COMMITMENT</div>
                  <div style={{ fontWeight: '600' }}>{agreement.volume}</div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                borderTop: '1px solid #e0e0e0',
                paddingTop: '24px'
              }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#461E96' }}>
                    Key Capabilities
                  </div>
                  <div style={{ fontSize: '12px', lineHeight: '1.8', color: '#666' }}>
                    {agreement.capabilities.map((cap, i) => (
                      <div key={i} style={{ marginBottom: '6px' }}>✓ {cap}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#461E96' }}>
                    Value Promise
                  </div>
                  <div style={{ fontSize: '12px', lineHeight: '1.8', color: '#666' }}>
                    {agreement.valuePromise.map((promise, i) => (
                      <div key={i} style={{ marginBottom: '6px' }}>✓ {promise}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Available Services */}
        <h2 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
          All Service Offerings
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
          {availableServices.map((service, i) => (
            <div key={i} style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '20px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 4px 12px rgba(70,30,150,0.1)'
              el.style.borderColor = '#461E96'
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = ''
              el.style.borderColor = '#e0e0e0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px', color: '#1a1a1a' }}>
                    {service.name}
                  </h4>
                  <p style={{ color: '#999', fontSize: '13px' }}>
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#461E96', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Key Capabilities
                  </div>
                  <div style={{ fontSize: '12px', lineHeight: '1.8', color: '#666' }}>
                    {service.capabilities.map((cap, j) => (
                      <div key={j} style={{ marginBottom: '6px' }}>✓ {cap}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => navigate(`/add-service?service=${encodeURIComponent(service.name)}`)}
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      background: '#461E96',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget as HTMLButtonElement).style.background = '#350D6B'}
                    onMouseOut={(e) => (e.currentTarget as HTMLButtonElement).style.background = '#461E96'}
                  >
                    Request Information
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
