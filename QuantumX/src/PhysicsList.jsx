import React, { useState, useEffect } from "react";
import { useFirebase } from "./FirebaseProvider";

import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import UploadImage from "./UploadImage";
const PhysicsList = () => {
  const fbContext = useFirebase();
  const db = fbContext.db;
  const [physics, setPhysics] = useState([]);
  useEffect(() => {
    let collectionRef = collection(db, "physics");
    let queryRef = query(collectionRef, orderBy("name"));
    const unsubscribe = onSnapshot(queryRef, (querySnap) => {
      if (querySnap.empty) {
        console.log("No docs found");
      } else {
        let physicsData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setPhysics(physicsData);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <br />
      {physics.map((physics) => {
        return (
          <ul key={physics.DOC_ID}>
            <li>name: {physics.name}</li>
            <li>vehicle: {physics.vehicle}</li>
            <li>docId: {physics.DOC_ID}</li>
            <li>
              image:{" "}
              {physics.imageUrl ? (
                <img src={physics.imageUrl} />
              ) : (
                <UploadImage docId={physics.DOC_ID} />
              )}
            </li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};

export default PhysicsList;
