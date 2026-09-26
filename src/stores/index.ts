import { create } from 'zustand'

interface AuthStore {
  isAuthenticated: boolean
  user: any
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: localStorage.getItem('cencora_auth') === 'true',
  user: localStorage.getItem('cencora_user') ? JSON.parse(localStorage.getItem('cencora_user') || '') : null,
  login: async (email: string, password: string) => {
    // Simple demo login - in production this would call Firebase
    if (email && password) {
      const user = { email, name: email.split('@')[0] }
      localStorage.setItem('cencora_auth', 'true')
      localStorage.setItem('cencora_user', JSON.stringify(user))
      set({ isAuthenticated: true, user })
    }
  },
  logout: () => {
    localStorage.removeItem('cencora_auth')
    localStorage.removeItem('cencora_user')
    set({ isAuthenticated: false, user: null })
  },
}))
