import { AuthProvider } from './contexts/authContext';
import Signup from './components/signup'

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default App;
