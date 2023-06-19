import RestOfApp from './RestOfApp'
import FirebaseProvider from './FirebaseProvider'
import './App.css'
import AuthProvider from './AuthProvider'

function App() {
 
  return (

    <FirebaseProvider>
      <AuthProvider>
      <RestOfApp/>
      </AuthProvider>
    </FirebaseProvider>
    
  )
}

export default App
