import { useNavigate } from "react-router-dom";

function UserTable({ users, sortUsers }) {
  const navigate = useNavigate();

  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th onClick={() => sortUsers("name")}>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th onClick={() => sortUsers("company")}>Company</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            style={{ cursor: "pointer" }}
          >
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;