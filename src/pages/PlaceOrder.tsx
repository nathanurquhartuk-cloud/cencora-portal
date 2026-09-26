import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

interface ServiceTier {
  name: string
  sla: string
  selected: boolean
  costPerUnit: number
}

export default function PlaceOrder() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const serviceName = searchParams.get('service') || 'Central Lab Logistics'
  const isRadiopharma = serviceName === 'Radiopharma'

  // Radiopharma state
  const [rpStep, setRpStep] = useState(1)
  const [rpProject, setRpProject] = useState('CP_ZRH_100227_YYZ')
  const [rpCharge, setRpCharge] = useState('')
  const [rpReference, setRpReference] = useState('')
  const [rpHwb, setRpHwb] = useState('')
  const [rpItem, setRpItem] = useState('')
  const [rpQuantity, setRpQuantity] = useState('1')
  const [rpDetails, setRpDetails] = useState('')

  // Radiopharma locations
  const [rpOriginAddr, setRpOriginAddr] = useState('')
  const [rpOriginCity, setRpOriginCity] = useState('')
  const [rpOriginPostal, setRpOriginPostal] = useState('')
  const [rpOriginCountry, setRpOriginCountry] = useState('United Kingdom')
  const [rpPickupEarliest, setRpPickupEarliest] = useState('')
  const [rpPickupLatest, setRpPickupLatest] = useState('')

  const [rpDestAddr, setRpDestAddr] = useState('')
  const [rpDestCity, setRpDestCity] = useState('')
  const [rpDestPostal, setRpDestPostal] = useState('')
  const [rpDestCountry, setRpDestCountry] = useState('Saudi Arabia')
  const [rpDeliveryEarliest, setRpDeliveryEarliest] = useState('')
  const [rpDeliveryLatest, setRpDeliveryLatest] = useState('')

  // Standard order state
  const [selectedTier, setSelectedTier] = useState<string>('Assured')
  const [orderQuantity, setOrderQuantity] = useState('10')
  const [orderAddress, setOrderAddress] = useState('')
  const [orderCity, setOrderCity] = useState('')
  const [orderPostcode, setOrderPostcode] = useState('')
  const [orderCountry, setOrderCountry] = useState('')
  const [orderNotes, setOrderNotes] = useState('')

  const serviceData: Record<string, { tiers: ServiceTier[] }> = {
    'Central Lab Logistics': {
      tiers: [
        { name: 'Standard', sla: '4-6 hour response', selected: false, costPerUnit: 450 },
        { name: 'Assured', sla: '2-hour response', selected: true, costPerUnit: 750 },
        { name: 'Critical', sla: '30-minute response', selected: true, costPerUnit: 1200 }
      ]
    }
  }

  const tiers = serviceData[serviceName]?.tiers || []

  const generateHwb = () => {
    const hwb = '93' + Math.floor(1000000 + Math.random() * 8999999).toString()
    setRpHwb(hwb)
  }

  const syncPickupWindow = (earliest: string) => {
    if (!earliest) return
    const date = new Date(earliest)
    date.setHours(date.getHours() + 3)
    const pad = (n: number) => String(n).padStart(2, '0')
    const latest = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
    setRpPickupLatest(latest)
  }

  const syncDeliveryWindow = (earliest: string) => {
    if (!earliest) return
    const date = new Date(earliest)
    date.setHours(date.getHours() + 3)
    const pad = (n: number) => String(n).padStart(2, '0')
    const latest = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
    setRpDeliveryLatest(latest)
  }

  const validateRpStep1 = () => {
    return rpCharge && rpReference && rpHwb && rpItem && rpQuantity && rpDetails
  }

  const validateRpStep2 = () => {
    return rpOriginAddr && rpOriginCity && rpOriginPostal && rpPickupEarliest &&
           rpDestAddr && rpDestCity && rpDestPostal && rpDeliveryEarliest
  }

  const nextRpStep = () => {
    if (rpStep === 1 && !validateRpStep1()) {
      alert('Please fill in all required fields in Account & Item')
      return
    }
    if (rpStep === 2 && !validateRpStep2()) {
      alert('Please fill in all required fields in Locations & Timing')
      return
    }
    setRpStep(rpStep + 1)
  }

  const prevRpStep = () => {
    setRpStep(rpStep - 1)
  }

  const submitRadioPharmOrder = () => {
    alert(`✓ RadioPharma Order Submitted!\n\nBooking Reference: WC-2026-RPH-${Math.floor(100000 + Math.random() * 900000)}\n\nYour Critical Tier order has been received. Real-time tracking will be available in your orders dashboard.`)
    navigate('/')
  }

  const calculateOrderCost = () => {
    const tier = tiers.find(t => t.name === selectedTier)
    if (!tier) return '$0'
    const qty = parseInt(orderQuantity) || 0
    const total = tier.costPerUnit * qty
    return `£${total.toLocaleString()}`
  }

  const submitOrder = (e: React.FormEvent) => {
    e.preventDefault()

    const tier = tiers.find(t => t.name === selectedTier)
    if (!tier) {
      alert('Please select a tier')
      return
    }

    alert(`Order Submitted!\n\nService Line: ${serviceName}\nTier: ${selectedTier}\nQuantity: ${orderQuantity}\nDelivery: ${orderAddress}, ${orderCity}, ${orderPostcode}, ${orderCountry}\nTotal Cost: ${calculateOrderCost()}\n\nYour order has been submitted.`)
    navigate('/')
  }

  const itemMap: Record<string, string> = {
    'white1': 'White 1 (Packing Group I)',
    'yellow1': 'Yellow 1 (Packing Group II)',
    'yellow2': 'Yellow 2 (Packing Group III)'
  }

  const pgMap: Record<string, string> = {
    'white1': 'I',
    'yellow1': 'II',
    'yellow2': 'III'
  }

  if (isRadiopharma) {
    return (
      <div style={{ padding: '24px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/') }} style={{ color: '#461E96', textDecoration: 'none', cursor: 'pointer' }}>Home</a>
            <span>›</span>
            <span>RadioPharma Order</span>
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
              marginBottom: '24px'
            }}
          >
            ← Back to Dashboard
          </button>

          {/* Page Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '8px', letterSpacing: '-0.8px', color: '#461E96' }}>
              Create RadioPharma Order
            </h1>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Class 7 radiopharmaceutical shipment with strict timing enforcement
            </p>
          </div>

          {/* Progress Indicator */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '32px',
            alignItems: 'center'
          }}>
            {[1, 2, 3].map((step) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: step <= rpStep ? '#461E96' : '#e0e0e0',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '14px'
                }}>
                  {step}
                </div>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: step <= rpStep ? '#461E96' : '#666'
                }}>
                  {step === 1 ? 'Essentials' : step === 2 ? 'Locations' : 'Review'}
                </span>
                {step < 3 && (
                  <div style={{
                    flex: 1,
                    height: '2px',
                    background: step < rpStep ? '#461E96' : '#e0e0e0',
                    minWidth: '40px'
                  }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Essentials */}
          {rpStep === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {/* Account & Item */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Account Details */}
                <div style={{
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '24px'
                }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                    Account Details
                  </h3>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Project
                    </label>
                    <select
                      value={rpProject}
                      onChange={(e) => setRpProject(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                    >
                      <option>CP_ZRH_100227_YYZ</option>
                      <option>CP_LHR_100338_RUH</option>
                      <option>CP_JFK_100901_FRA</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Charge Code
                    </label>
                    <input
                      type="text"
                      value={rpCharge}
                      onChange={(e) => setRpCharge(e.target.value)}
                      placeholder="e.g., 12345"
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Reference Code
                    </label>
                    <input
                      type="text"
                      value={rpReference}
                      onChange={(e) => setRpReference(e.target.value)}
                      placeholder="Reference"
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      value={rpHwb}
                      onChange={(e) => setRpHwb(e.target.value)}
                      placeholder="House Waybill"
                      style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                    <button
                      onClick={generateHwb}
                      style={{
                        padding: '10px 16px',
                        background: '#f5f5f5',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Gen
                    </button>
                  </div>
                </div>

                {/* Item Selection */}
                <div style={{
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '24px'
                }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                    Item Selection
                  </h3>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      RadioPharma Item Type
                    </label>
                    <select
                      value={rpItem}
                      onChange={(e) => setRpItem(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                    >
                      <option value="">Select item...</option>
                      <option value="white1">White 1 (Packing Group I)</option>
                      <option value="yellow1">Yellow 1 (Packing Group II)</option>
                      <option value="yellow2">Yellow 2 (Packing Group III)</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={rpQuantity}
                      onChange={(e) => setRpQuantity(e.target.value)}
                      min="1"
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Item Details
                    </label>
                    <textarea
                      value={rpDetails}
                      onChange={(e) => setRpDetails(e.target.value)}
                      placeholder="Isotope, decay window, special handling..."
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px',
                        minHeight: '70px',
                        fontFamily: 'inherit'
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Compliance Info */}
              <div style={{
                background: '#f5f1e6',
                border: '1px solid #d4a574',
                borderRadius: '8px',
                padding: '24px',
                flex: 1
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', color: '#6d5a40' }}>
                  ⚠️ Critical Tier Only
                </h3>
                <div style={{ fontSize: '13px', color: '#6d5a40', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '12px' }}>
                    <strong>RadioPharma has ONE tier:</strong> Critical with 24/7 contingency and strict timing.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong>Automated Compliance:</strong>
                  </p>
                  <ul style={{ marginLeft: '16px', marginBottom: '12px' }}>
                    <li>✓ Dangerous Goods: UN2915, Class 7</li>
                    <li>✓ Packaging: Type A IATA & ADR compliant</li>
                    <li>✓ Monitoring: Real-time GPS + 24/7 alerts</li>
                    <li>✓ Strict Pick-up & Delivery: 3-hour windows enforced</li>
                  </ul>
                  <p style={{ fontSize: '12px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #d4a574' }}>
                    All regulatory details are pre-populated and managed by World Courier. No manual configuration needed.
                  </p>
                </div>
                <button
                  onClick={nextRpStep}
                  style={{
                    marginTop: '24px',
                    padding: '10px 16px',
                    background: '#461E96',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Next: Locations & Timing →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Locations & Timing */}
          {rpStep === 2 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {/* Origin */}
              <div style={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '24px'
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                  Pick-up Location
                </h3>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Address
                  </label>
                  <input
                    type="text"
                    value={rpOriginAddr}
                    onChange={(e) => setRpOriginAddr(e.target.value)}
                    placeholder="Street address"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                    required
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      City
                    </label>
                    <input
                      type="text"
                      value={rpOriginCity}
                      onChange={(e) => setRpOriginCity(e.target.value)}
                      placeholder="City"
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Postcode
                    </label>
                    <input
                      type="text"
                      value={rpOriginPostal}
                      onChange={(e) => setRpOriginPostal(e.target.value)}
                      placeholder="Postcode"
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Country
                  </label>
                  <select
                    value={rpOriginCountry}
                    onChange={(e) => setRpOriginCountry(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                  >
                    <option>United Kingdom</option>
                    <option>Saudi Arabia</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>Netherlands</option>
                  </select>
                </div>
                <div style={{ borderTop: '1px solid #e0e0e0', marginTop: '16px', paddingTop: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Earliest Pick-up Time
                  </label>
                  <input
                    type="datetime-local"
                    value={rpPickupEarliest}
                    onChange={(e) => {
                      setRpPickupEarliest(e.target.value)
                      syncPickupWindow(e.target.value)
                    }}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                    required
                  />
                  <div style={{ marginTop: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Latest Pick-up Time <span style={{ color: '#666', fontSize: '11px' }}>(auto-3hrs)</span>
                    </label>
                    <input
                      type="datetime-local"
                      value={rpPickupLatest}
                      readOnly
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px',
                        background: '#f5f5f5'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div style={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '24px'
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                  Delivery Location
                </h3>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Address
                  </label>
                  <input
                    type="text"
                    value={rpDestAddr}
                    onChange={(e) => setRpDestAddr(e.target.value)}
                    placeholder="Street address"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                    required
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      City
                    </label>
                    <input
                      type="text"
                      value={rpDestCity}
                      onChange={(e) => setRpDestCity(e.target.value)}
                      placeholder="City"
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Postcode
                    </label>
                    <input
                      type="text"
                      value={rpDestPostal}
                      onChange={(e) => setRpDestPostal(e.target.value)}
                      placeholder="Postcode"
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px'
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Country
                  </label>
                  <select
                    value={rpDestCountry}
                    onChange={(e) => setRpDestCountry(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                  >
                    <option>Saudi Arabia</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>Netherlands</option>
                  </select>
                </div>
                <div style={{ borderTop: '1px solid #e0e0e0', marginTop: '16px', paddingTop: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Earliest Delivery Time
                  </label>
                  <input
                    type="datetime-local"
                    value={rpDeliveryEarliest}
                    onChange={(e) => {
                      setRpDeliveryEarliest(e.target.value)
                      syncDeliveryWindow(e.target.value)
                    }}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                    required
                  />
                  <div style={{ marginTop: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                      Latest Delivery Time <span style={{ color: '#666', fontSize: '11px' }}>(auto-3hrs)</span>
                    </label>
                    <input
                      type="datetime-local"
                      value={rpDeliveryLatest}
                      readOnly
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '13px',
                        background: '#f5f5f5'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {rpStep === 3 && (
            <div>
              <div style={{
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '24px',
                marginBottom: '24px'
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                  Order Summary
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '24px',
                  fontSize: '13px'
                }}>
                  <div>
                    <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                      Account
                    </div>
                    <div style={{ fontWeight: '600', marginBottom: '16px' }}>
                      {rpProject} • Charge: {rpCharge}
                    </div>
                    <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                      Item
                    </div>
                    <div style={{ fontWeight: '600' }}>
                      {itemMap[rpItem] || '—'} • Qty: {rpQuantity}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                      Pick-up
                    </div>
                    <div style={{ fontWeight: '600', marginBottom: '16px' }}>
                      {rpOriginCity} • {rpPickupEarliest.substring(0, 16).replace('T', ' ')} to {rpPickupLatest.substring(11)}
                    </div>
                    <div style={{ color: '#666', marginBottom: '4px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                      Delivery
                    </div>
                    <div style={{ fontWeight: '600' }}>
                      {rpDestCity} • {rpDeliveryEarliest.substring(0, 16).replace('T', ' ')} to {rpDeliveryLatest.substring(11)}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: '#eef7f3',
                border: '1px solid #27ae60',
                borderRadius: '8px',
                padding: '24px',
                marginBottom: '24px'
              }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px', color: '#1a6b3e' }}>
                  ✓ Regulatory Compliance Assured
                </h3>
                <div style={{ fontSize: '12px', color: '#2d5740', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '8px' }}>
                    ✓ Dangerous Goods: UN2915, Class 7, Type A packaging (auto-applied)
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    ✓ Packing Group: {pgMap[rpItem] || '—'} (from item category)
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    ✓ Regulatory Envelope: IATA & ADR compliance, critical tier only
                  </p>
                  <p>
                    ✓ Monitoring: Real-time GPS tracking, 24/7 contingency, dedicated vehicle
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={prevRpStep}
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    background: '#f5f5f5',
                    color: '#1a1a1a',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={submitRadioPharmOrder}
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    background: '#461E96',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Submit RadioPharma Order
                </button>
              </div>
            </div>
          )}

          {/* Step Navigation */}
          {(rpStep === 1 || rpStep === 2) && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
              {rpStep === 2 && (
                <button
                  onClick={prevRpStep}
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    background: '#f5f5f5',
                    color: '#1a1a1a',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  ← Back
                </button>
              )}
              <button
                onClick={nextRpStep}
                style={{
                  flex: rpStep === 2 ? 1 : undefined,
                  padding: '10px 16px',
                  background: '#461E96',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {rpStep === 2 ? 'Review & Submit →' : 'Next: Locations & Timing →'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Standard Order Flow
  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '12px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/') }} style={{ color: '#461E96', textDecoration: 'none', cursor: 'pointer' }}>Home</a>
          <span>›</span>
          <span>Place Order</span>
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
            marginBottom: '24px'
          }}
        >
          ← Back to Dashboard
        </button>

        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '8px', letterSpacing: '-0.8px', color: '#461E96' }}>
            Place Order - {serviceName}
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Configure and submit your order
          </p>
        </div>

        {/* Two-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Service Line & Tier Selection */}
          <div>
            <div style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                Service Line
              </h3>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px',
                background: '#461E96',
                color: 'white',
                borderRadius: '6px'
              }}>
                {serviceName}
              </div>
            </div>

            <div style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                Select Tier
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tiers.map((tier) => (
                  <label
                    key={tier.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      padding: '12px',
                      border: selectedTier === tier.name ? '2px solid #461E96' : '2px solid #e0e0e0',
                      borderRadius: '6px',
                      background: selectedTier === tier.name ? 'rgba(70,30,150,0.05)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <input
                      type="radio"
                      name="orderTier"
                      value={tier.name}
                      checked={selectedTier === tier.name}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <div>
                      <div style={{ fontWeight: '700', marginBottom: '2px' }}>
                        {tier.name} Tier
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {tier.sla}
                      </div>
                      <div style={{ fontSize: '11px', color: '#461E96', fontWeight: '600', marginTop: '4px' }}>
                        £{tier.costPerUnit} per unit
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Details Form */}
          <form onSubmit={submitOrder} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '24px',
              flex: 1
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', color: '#666' }}>
                Order Details
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Quantity
                </label>
                <input
                  type="number"
                  value={orderQuantity}
                  onChange={(e) => setOrderQuantity(e.target.value)}
                  placeholder="e.g., 50"
                  min="1"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Delivery Address
                </label>
                <input
                  type="text"
                  value={orderAddress}
                  onChange={(e) => setOrderAddress(e.target.value)}
                  placeholder="Building/Suite, Street address"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  City
                </label>
                <input
                  type="text"
                  value={orderCity}
                  onChange={(e) => setOrderCity(e.target.value)}
                  placeholder="e.g., London"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Postcode
                  </label>
                  <input
                    type="text"
                    value={orderPostcode}
                    onChange={(e) => setOrderPostcode(e.target.value)}
                    placeholder="e.g., SW1A 1AA"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                    Country
                  </label>
                  <input
                    type="text"
                    value={orderCountry}
                    onChange={(e) => setOrderCountry(e.target.value)}
                    placeholder="e.g., UK"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      fontSize: '13px'
                    }}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Special Instructions
                </label>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Any special handling, temperature requirements, or notes..."
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px',
                    minHeight: '80px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{
                background: '#f5f5f5',
                padding: '12px',
                borderRadius: '6px',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', color: '#666' }}>
                  Estimated Cost
                </div>
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#461E96' }}>
                  {calculateOrderCost()}
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '10px 16px',
                  background: '#461E96',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
