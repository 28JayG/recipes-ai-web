import logo from './logo.svg';
import { signInWithRedirect } from 'firebase/auth';
import { firebaseAuth, googleAuthProvider } from 'firebase-config';
import './App.css';

function App() {
  const handleGoogleSignUp = async (): Promise<void> => {
    const result = await signInWithRedirect(firebaseAuth, googleAuthProvider);
    console.log(result);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={handleGoogleSignUp}>Sign with Google</button>
      </header>
    </div>
  );
}

export default App;
