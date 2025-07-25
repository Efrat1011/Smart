import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Market from './pages/Market'
import Weather from './pages/Weather'
import Profile from './pages/Profile'
import Tips from './pages/Tips'
import Home from './pages/Home'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import AddProduct from './pages/AddProduct'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/market"
            element={
              <ProtectedRoute>
                <Market />
              </ProtectedRoute>
            }
          />
          <Route
            path="/weather"
            element={
              <ProtectedRoute>
                <Weather />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tips"
            element={
              <ProtectedRoute>
                <Tips />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/add-product" 
          element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
          }
           />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
