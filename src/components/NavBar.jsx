import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            {/* localhost:5173 "/" */}
            <Link to="/">Post </Link>
          </li>
          <li>
            <Link to="/pokemon">Mailboxes</Link>
          </li>
          <li>
            <Link to="/pokemon/new">New Mailbox </Link>
          </li>
        </ul>
      </nav>
    )
  }

  export default NavBar