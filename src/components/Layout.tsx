import { Outlet, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, ShoppingCart, FileText, Truck, FileCheck } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', Icon: LayoutDashboard },
    { path: '/orders', label: 'Orders', Icon: ShoppingCart },
    { path: '/invoices', label: 'Invoices', Icon: FileText },
    { path: '/tracking', label: 'Tracking', Icon: Truck },
    { path: '/agreements', label: 'Agreements', Icon: FileCheck }
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
        <div style={{ display: 'flex', gap: '0px', padding: '0 16px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {navItems.map((item) => {
            const { Icon } = item
            const isActive = location.pathname === item.path
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                style={{
                  padding: '12px 16px',
                  border: 'none',
                  background: 'transparent',
                  color: isActive ? '#461E96' : '#666',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '13px',
                  transition: 'all 0.2s ease',
                  borderBottom: isActive ? '3px solid #461E96' : '3px solid transparent',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  if (!isActive) {
                    el.style.color = '#461E96'
                    el.style.background = '#f9f9f9'
                  }
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLButtonElement
                  if (!isActive) {
                    el.style.color = '#666'
                    el.style.background = 'transparent'
                  }
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={18} strokeWidth={1.5} />
                <span>{item.label}</span>
              </button>
            )
          })}
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
