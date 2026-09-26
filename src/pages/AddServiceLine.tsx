import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AddServiceLine() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const serviceName = searchParams.get('service') || 'Service'

  const [selectedTiers, setSelectedTiers] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    volume: '',
    consent: false
  })

  const tiers = [
    { id: 'standard', name: 'Standard Tier', description: '4-6 hour response time' },
    { id: 'assured', name: 'Assured Tier', description: '2-hour response time' },
    { id: 'critical', name: 'Critical Tier', description: '30-minute response time' }
  ]

  const toggleTier = (tierId: string) => {
    setSelectedTiers(prev =>
      prev.includes(tierId)
        ? prev.filter(t => t !== tierId)
        : [...prev, tierId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTiers.length) {
      alert('Please select at least one tier')
      return
    }
    if (!formData.consent) {
      alert('Please confirm you would like to be contacted')
      return
    }

    alert(`✓ Request submitted for ${serviceName}!\n\nSelected Tiers: ${selectedTiers.map(t => tiers.find(tier => tier.id === t)?.name).join(', ')}\n\nOur sales team will contact you soon at ${formData.email}.`)
    navigate('/')
  }

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'white',
            border: '1px solid #e0e0e0',
            padding: '10px 16px',
            borderRadius: '6px',
            marginBottom: '24px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
            color: '#666'
          }}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>

        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '8px', letterSpacing: '-0.8px', color: '#461E96' }}>
            Add {serviceName}
          </h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Select your preferred tier and schedule a call with our sales team
          </p>
        </div>

        {/* Form Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Tier Selection */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
              Select Your Tier
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {tiers.map((tier) => (
                <label
                  key={tier.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    padding: '16px',
                    border: selectedTiers.includes(tier.id) ? '2px solid #461E96' : '2px solid #e0e0e0',
                    borderRadius: '8px',
                    background: selectedTiers.includes(tier.id) ? 'rgba(70,30,150,0.05)' : 'white',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedTiers.includes(tier.id)}
                    onChange={() => toggleTier(tier.id)}
                    style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                  />
                  <div>
                    <div style={{ fontWeight: '700', marginBottom: '4px' }}>{tier.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{tier.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Sales Request Form */}
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#666' }}>
              Request Sales Call
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Estimated Monthly Volume
                </label>
                <input
                  type="number"
                  placeholder="e.g., 100 units"
                  required
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    fontSize: '13px'
                  }}
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '13px' }}>
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                />
                I'd like a sales representative to contact me
              </label>

              <button
                type="submit"
                style={{
                  width: '100%',
                  marginTop: '12px',
                  padding: '10px 16px',
                  background: '#461E96',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => (e.currentTarget as HTMLButtonElement).style.background = '#350D6B'}
                onMouseOut={(e) => (e.currentTarget as HTMLButtonElement).style.background = '#461E96'}
              >
                Schedule Sales Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
