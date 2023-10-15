
import Link from 'next/link';
import { useSelector } from 'react-redux'; 

export default function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        ) : null}
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}