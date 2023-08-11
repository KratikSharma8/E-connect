import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async () => {
    const auth = getAuth();

    try {
        const user = auth.currentUser;

        if (user) {
          const displayName = user.displayName;
          console.log('User Display Name:', displayName);
        } else {
          console.log('No user is currently signed in.');
        }      await signOut(auth);
      setIsLoggedOut(true);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div>
      {isLoggedOut ? (
        <p>You have successfully logged out.</p>
      ) : (
        <div>
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Logout;
