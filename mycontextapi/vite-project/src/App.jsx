import './App.css'
import AuthContext from './createContext.js'
import MyComponent from './MyComponent.jsx'


function App() {
  const username = 'kilngdong'

  return (
    <AuthContext.Provider value={username}>
      <MyComponent />
    </AuthContext.Provider>
  )
}

export default App
