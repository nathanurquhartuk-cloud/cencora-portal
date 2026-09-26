import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/query-client'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Invoices from './pages/Invoices'
import Tracking from './pages/Tracking'
import Agreements from './pages/Agreements'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { useAuthStore } from './stores'

export default function App() {
  const { isAuthenticated } = useAuthStore()

  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/cencora-portal/">
        <Routes>
          <Route path="/login" element={<Login />} />
          {isAuthenticated ? (
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/agreements" element={<Agreements />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}
