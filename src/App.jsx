import { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/offers");
  }, []);

  return (
    <section className="app">
      <header>Hello HR Team Member</header>
      <aside>
        <nav>
          <menu>
            <li>
              <Link to="create">Create Offer</Link>
            </li>
            <li>
              <Link to="offers">View Offers</Link>
            </li>
          </menu>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
