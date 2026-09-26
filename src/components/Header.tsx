import { useState } from 'react'
import { Bell, AlertTriangle, RotateCw, FileText, CheckCircle, X } from 'lucide-react'
import { useAuthStore } from '../stores'

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false)
  const { user } = useAuthStore()

  const notifications = [
    {
      id: 1,
      type: 'danger',
      Icon: AlertTriangle,
      title: 'Temperature Excursion Detected',
      message: 'Order RD-2026-089 experienced brief temperature variance (8.2°C max). Shipment integrity verified.',
      time: '2 minutes ago',
      unread: true
    },
    {
      id: 2,
      type: 'warning',
      Icon: RotateCw,
      title: 'Delivery Address Redirect Required',
      message: 'Order LL-2026-078 requires updated delivery confirmation. Action needed by Sep 28.',
      time: '15 minutes ago',
      unread: true
    },
    {
      id: 3,
      type: 'warning',
      Icon: FileText,
      title: 'Invoice Due Soon',
      message: 'INV-2026-087 ($21,800) due Oct 26, 2026. Set up payment now.',
      time: '1 hour ago',
      unread: false
    },
    {
      id: 4,
      type: 'success',
      Icon: CheckCircle,
      title: 'Agreement Renewed',
      message: 'Radiopharma Critical Tier renewed through Dec 31, 2027 with improved volume pricing.',
      time: '3 hours ago',
      unread: false
    }
  ]

  return (
    <header style={{
      background: 'white',
      borderBottom: '2px solid #461E96',
      padding: '16px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
    }}>
      {/* Logo */}
      <div style={{ fontWeight: '900', fontSize: '20px', color: '#461E96', letterSpacing: '-0.8px' }}>
        Cencora
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5'}
            onMouseOut={(e) => (e.currentTarget as HTMLButtonElement).style.background = 'transparent'}
            title="Notifications"
            aria-label="Notifications"
          >
            <Bell size={20} color="#461E96" strokeWidth={1.5} />
            <div style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              background: '#e74c3c',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '700',
              border: '2px solid white'
            }}>
              3
            </div>
          </button>

          {/* Notification Panel */}
          {showNotifications && (
            <>
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.3)',
                  zIndex: 1100
                }}
                onClick={() => setShowNotifications(false)}
              />
              <div style={{
                position: 'absolute',
                top: '60px',
                right: '16px',
                width: '400px',
                maxHeight: '500px',
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1101
              }}>
                <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', margin: 0 }}>Notifications</h3>
                  <button onClick={() => setShowNotifications(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Close notifications">
                    <X size={20} color="#999" strokeWidth={1.5} />
                  </button>
                </div>
                <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                  {notifications.map((notif) => {
                    const { Icon } = notif
                    const iconColor = notif.type === 'danger' ? '#e74c3c' :
                                     notif.type === 'warning' ? '#f39c12' :
                                     notif.type === 'success' ? '#27ae60' :
                                     '#3498db'
                    const bgColor = notif.type === 'danger' ? 'rgba(231,76,60,0.1)' :
                                   notif.type === 'warning' ? 'rgba(243,156,18,0.1)' :
                                   notif.type === 'success' ? 'rgba(39,174,96,0.1)' :
                                   'rgba(52,152,219,0.1)'
                    return (
                      <div
                        key={notif.id}
                        style={{
                          padding: '12px 16px',
                          borderBottom: '1px solid #e0e0e0',
                          cursor: 'pointer',
                          transition: 'background 0.2s ease',
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'flex-start',
                          background: notif.unread ? 'rgba(70,30,150,0.03)' : 'transparent'
                        }}
                        onMouseOver={(e) => (e.currentTarget as HTMLDivElement).style.background = '#f5f5f5'}
                        onMouseOut={(e) => (e.currentTarget as HTMLDivElement).style.background = notif.unread ? 'rgba(70,30,150,0.03)' : 'transparent'}
                      >
                        <div style={{
                          flexShrink: 0,
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: bgColor
                        }}>
                          <Icon size={18} color={iconColor} strokeWidth={1.5} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: '600', fontSize: '13px', marginBottom: '4px', color: '#1a1a1a' }}>
                            {notif.title}
                          </div>
                          <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.4', marginBottom: '6px' }}>
                            {notif.message}
                          </div>
                          <div style={{ fontSize: '11px', color: '#999' }}>
                            {notif.time}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div style={{ padding: '12px 16px', borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
                  <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#461E96', fontSize: '12px', fontWeight: '600', textDecoration: 'none', cursor: 'pointer' }}>
                    View all notifications →
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
          <div>
            <strong>Astra Zeneca</strong><br />
            <small style={{ color: '#666' }}>Account Admin</small>
          </div>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #461E96, #6B3BB3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '14px'
          }}>
            AZ
          </div>
        </div>
      </div>
    </header>
  )
}
