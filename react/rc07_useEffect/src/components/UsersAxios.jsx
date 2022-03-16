import { useState, useEffect } from "react";
import axios from "axios";
import faker from "faker";

const UsersAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //   axios("https://jsonplaceholder.typicode.com/users");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const data = [
    {
      id: faker.datatype.number(),
      name: faker.name.findName(),
    },
  ];
  console.log(data);

  const postUsers = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        data,
      })
      .then((res) => {
        console.log(res.data.data);
        setUsers([...users, ...res.data.data]);
      });
  };
  console.log(users);
  return (
    <div className="container text-center p-4">
      <h1>User List</h1>
      <button className="btn btn-danger" onClick={postUsers}>
        POST
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

export default UsersAxios;
