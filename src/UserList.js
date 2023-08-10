import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("An error occurred ", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="items-layout">
      {users.map((user, index) => (
        <div key={index} className="items">
          <p>
            <b>Name</b>: {user.name}
          </p>
          <p>
            <b>Username</b>: {user.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
