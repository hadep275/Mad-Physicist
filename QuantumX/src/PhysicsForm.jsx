import React, {useState} from 'react'
import {addDoc, collection} from "firebase/firestore";
import {useFirebase} from './FirebaseProvider';

const PhysicsForm = () => {
const fbContext = useFirebase();
const db = fbContext.db
const [name, setName] = useState('');
const [vehicle, setVehicle] = useState('');
const addphysics = async (physicsName, physicsVehicle) => {
                 try {
                   let collectionRef = collection(db, "physics");
                   await addDoc(collectionRef, {name: physicsName, vehicle: physicsVehicle});
                   setName('');
                   setVehicle('');
                 } catch (ex) {
                   console.log("FIRESTORE ADD FAILURE!", ex.message);
}};
  return (
    <div>
      <input name="name" value={name}
            onChange={e =>setName(e.target.value)}/>
            <br/>
        <input name="vehicle" value={vehicle}
            onChange={e =>setVehicle(e.target.value)} />
            <br/>
        <button onClick={() => addphysics(name, vehicle)}>
            ADD physics
            </button>
    </div>
  )
}

export default PhysicsForm
