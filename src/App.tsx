import { googleSignIn } from "./services/firebase";

const App = () => (
  <div>
    <button onClick={() => googleSignIn()}>Sign in</button>
  </div>
)

export default App;
