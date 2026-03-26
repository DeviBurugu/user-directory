import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // Search filter
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  const sortUsers = (key) => {
    const sorted = [...users].sort((a, b) => {
      let valA = key === "company" ? a.company.name : a[key];
      let valB = key === "company" ? b.company.name : b[key];

      return sortOrder === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });

    setUsers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Directory</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <UserTable users={filteredUsers} sortUsers={sortUsers} />
    </div>
  );
}

export default Dashboard;