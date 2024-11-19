import { Link } from "react-router-dom";
import { useStore } from "../store/store";

function Navbar() {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { favorites }: any = useStore();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to={"/favorites"}>Favoriler ({favorites.length})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
