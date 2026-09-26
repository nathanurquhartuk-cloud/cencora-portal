import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/orders', label: 'Orders', icon: '📋' },
    { path: '/invoices', label: 'Invoices', icon: '📄' },
    { path: '/tracking', label: 'Tracking', icon: '🚚' },
    { path: '/agreements', label: 'Agreements', icon: '📑' }
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Navigation Menu */}
      <nav style={{
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        padding: '0',
        position: 'sticky',
        top: '56px',
        zIndex: 900,
        display: 'flex'
      }} role="navigation" aria-label="Main navigation">
        <div style={{ display: 'flex', gap: '2px', padding: '0 16px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                padding: '12px 16px',
                border: 'none',
                background: 'transparent',
                color: location.pathname === item.path ? '#461E96' : '#666',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                transition: 'all 0.2s ease',
                borderBottom: location.pathname === item.path ? '2px solid #461E96' : '2px solid transparent',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                aria: location.pathname === item.path ? 'current' : undefined
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLButtonElement
                if (location.pathname !== item.path) {
                  el.style.color = '#461E96'
                  el.style.background = '#f5f5f5'
                }
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLButtonElement
                if (location.pathname !== item.path) {
                  el.style.color = '#666'
                  el.style.background = 'transparent'
                }
              }}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
