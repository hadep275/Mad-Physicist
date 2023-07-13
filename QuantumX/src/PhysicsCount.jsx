import React, { useState } from "react";
import { useFirebase } from "./FirebaseProvider";
import { httpsCallable} from "firebase/functions";
const PhysicsCount = () => {
  const fb = useFirebase();
  const cloudFuncs = fb.cloudFuncs;

  const [count, setCount] = useState();
  const getPhysicsCount = async () => {
    const getNumberOfPhysics = httpsCallable(cloudFuncs, "getNumberOfPhysics");
    const result = await getNumberOfPhysics();
    const data = result.data;
    setCount(data.numPhysics);
  };

  return (
    <div>
      <button onClick={getPhysicsCount}>Get Count</button>
      <p>Number of physics is?????:  {count}</p>
    </div>
  );
};

export default PhysicsCount;
