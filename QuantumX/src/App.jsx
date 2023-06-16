import RestOfApp from './RestOfApp'
import FirebaseProvider from './FirebaseProvider'
import './App.css'

function App() {
 
  return (
    <FirebaseProvider>
      <RestOfApp/>
    </FirebaseProvider>
    
  )
}

export default App
