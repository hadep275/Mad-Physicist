import RestOfApp from "./RestOfApp";
import FirebaseProvider from "./FirebaseProvider";
import "./App.css";
import AuthProvider from "./AuthProvider";
import PhysicsCount from "./PhysicsCount";

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <RestOfApp />
        <PhysicsCount />
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
