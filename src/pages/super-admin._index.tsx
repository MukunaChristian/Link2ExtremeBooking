import { Form } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function SuperAdmin() {
  return (
    <div className="table-container">
      <div className="input-flex">
        <div className="flex-btn">
          <a href=""> Operators </a>
          <Link to="/activity-sites">Sites</Link>
          <a href=""> Activities</a>
          <a href="">Users</a>
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
            <Link to="/add-company">Add</Link>
          </button>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr className="header-2">
              <th>Operator Name</th>
              <th> Total Sites</th>
              <th> Contacts</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abseiling</td>
              <td>1</td>
              <td>Admins@gmail.com</td>
              <td>View</td>
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
