import { Form } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { useLocation } from "react-router-dom"; // Assuming you're using React Router for routing



function isActive(route: string) {
  const location = useLocation();
  return location.pathname === route ? "active" : "";
}

export default function User() {
  return (
    <div className="table-container">
      <div className="input-flex">
        <div className="flex-btn">
          <Link to="/operators" className={isActive("/operators")}>
            Operators
          </Link>
          <Link to="/activity-sites" className={isActive("/activity-sites")}>
            Sites
          </Link>
          <Link to="/activities" className={isActive("/activities")}>
            Activities
          </Link>
          <Link to="/users" className={isActive("/users")}>
            Users
          </Link>
        </div>
        <div className="btn-flex-form">
          <Form method="get" className="input-search">
            <input
              className="input-form"
              type="text"
              name="query"
              placeholder="Search..."
            />

            <img src="app/assets/search-svgrepo-com.png" alt="" />
          </Form>
          <button className="btn-addUser">
            <Link to="/add-users-operator">Add User</Link>
          </button>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr className="header">
              <th> Name</th>
              <th> User Type</th>
              <th> Email</th>
              <th>Site/Operator </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first-column">Jack Spadac</td>
              <td className="first-column">Admin</td>
              <td className="first-column">JackSpadac@gmail.com</td>
              <td className="first-column">Bloukraans</td>
              <td className="first-column">View</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="first-column">Chey NeedsGlasses</td>
              <td className="first-column">Super Admin</td>
              <td className="first-column">Chey@gmail.com</td>
              <td className="first-column">Wild Horizons</td>
              <td className="first-column">View</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <Link to="/page/prev">Prev</Link>
        <Link to="/page/1">1</Link>
        <Link to="/page/2">2</Link>
        <Link to="/page/3">3</Link>
        <Link to="/page/3">4</Link>
        <Link to="/page/3">5</Link>
        {/* Add more page links as needed */}
        <Link to="/page/next">Next</Link>
      </div>
    </div>
  );
}
