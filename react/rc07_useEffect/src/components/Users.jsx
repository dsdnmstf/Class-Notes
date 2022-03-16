import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  console.log(users);
  return (
    <div className="container text-center p-4">
      <h1>User List</h1>
      <button className="btn btn-success" onClick={getUsers}>
        GET USERS
      </button>
      <div className="row justify-content-center">
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div className="col-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
              />
              <h6>{name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
