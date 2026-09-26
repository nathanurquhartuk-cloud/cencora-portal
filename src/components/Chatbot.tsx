import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    alert('💬 Chat feature coming soon!\n\nFor support, email: support@cencora.com\nPhone: +1 (800) 555-CENCORA\n\nBusiness hours: Monday - Friday, 8 AM - 6 PM EST')
  }

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#461E96',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        zIndex: 999,
        boxShadow: '0 4px 16px rgba(70,30,150,0.4)',
        transition: 'all 0.2s ease'
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(70,30,150,0.6)'
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(70,30,150,0.4)'
      }}
      aria-label="Open chat support"
      title="Chat with us"
    >
      <MessageCircle size={24} />
    </button>
  )
}
