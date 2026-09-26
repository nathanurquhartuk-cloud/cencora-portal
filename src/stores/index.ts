import { create } from 'zustand'

interface AuthStore {
  isAuthenticated: boolean
  user: any
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: () => set({ isAuthenticated: false, user: null }),
}))
