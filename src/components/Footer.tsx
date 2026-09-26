import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer
      style={{
        background: 'white',
        borderTop: '1px solid #e0e0e0',
        padding: '24px 16px',
        marginTop: '32px',
        fontSize: '12px',
        color: '#666'
      }}
      role="contentinfo"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Help & Documentation'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Help & Documentation
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Contact Support'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('API Documentation'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('System Status'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  System Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>Account</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Account Settings'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Account Settings
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Team Members'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Team Members
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Billing'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Billing
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Security'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>Resources</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Knowledge Base'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Product Updates'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Product Updates
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Community'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Community
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Blog'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Compliance'); }}
                   style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
                   onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>© 2026 Cencora. All rights reserved. | v2.1.0</div>
          <div style={{ fontSize: '11px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Accessibility Statement'); }}
               style={{ color: '#666', textDecoration: 'none', marginRight: '16px' }}
               onMouseOver={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#461E96'}
               onMouseOut={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#666'}>
              Accessibility
            </a>
            <span>Last updated: Sept 26, 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
