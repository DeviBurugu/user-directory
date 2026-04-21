import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h2>{user.name}</h2>

      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>

      <h3>Address</h3>
      <p>{user.address.street}, {user.address.city}</p>
    </div>
  );
}

export default UserDetail;
