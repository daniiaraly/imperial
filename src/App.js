import MainRoutes from './MainRoutes'
import AuthContextProvider from './Contexts/AuthContext'
import ProductsContextProvider from './Contexts/ProductsContext'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </ProductsContextProvider>
    </div>
  )
}
export default App
