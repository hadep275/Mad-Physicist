import React from 'react'
// import { useFirebase } from './FirebaseProvider'
import { useAuth } from './AuthProvider'
import Login from "./Login"
import PhysicsList from './PhysicsList'
import PhysicsForm from './PhysicsForm'

const RestOfApp = () => {
  const auth =useAuth();
  const user =auth.user;
  // const fb = useFirebase();
  // const app= fb.app;
  return (
    <div className='App'>
{user ? 'you are logged in!' : 'not logged in 😔'
}
<Login/>
<PhysicsList/>
<PhysicsForm/>
</div>
  )
}

export default RestOfApp
