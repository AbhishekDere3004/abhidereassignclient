// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries'; 
import { signout } from '../redux/authSlice'; 
import Navbar from '../components/Navbar'; 

export default function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const { loading, error, data } = useQuery(GET_USERS); 

  const handleSignout = () => {
    
    dispatch(signout());
  };

  return (
    <div>
      <Head>
        <title>Your App Title</title>
      </Head>
      <Navbar /> 
      <main>
        {isAuthenticated ? (
          <div>
            <h1>Welcome to Your Dashboard</h1>
            {loading ? (
              <p>Loading user data...</p>
            ) : error ? (
              <p>Error loading user data</p>
            ) : (
              <ul>
                {data.users.map((user) => (
                  <li key={user.id}>
                    <div>
                      <strong>{user.firstName}</strong>
                      <span> ({user.username})</span>
                    </div>
                    <button>Follow</button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={handleSignout}>Sign Out</button>
          </div>
        ) : (
          <div>
            <h1>Welcome to Your Next.js App</h1>
            <p>Start building your project!</p>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
