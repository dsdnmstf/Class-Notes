import { useState, useEffect } from "react";
import axios from "axios";
import faker from "faker";


const Userspost = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
      console.log(users);
  }, []);

  const databir = {
  id: 11,
  name: faker.name.findName(),
  lastname: "dasdan",
};

const dataiki = {
  id: 15,
  name: faker.name.findName(),
  lastname: "kaya",
};
  
  const postUsers = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts",{databir})
      .then((res) => setUsers([...users, res.databir.databir]))
      .catch((err) => console.log(err));
  };
  const postUsers2 = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {dataiki})
      .then((res) => setUsers([...users, res.dataiki.dataiki]))
      .catch((err) => console.log(err));
  };

console.log(users);
  return (
    <div className="container text-center mt-4">
      <button className="btn btn-success" onClick={postUsers}>
        POST DATA
      </button>
      <button className="btn btn-success" onClick={postUsers}>
        POST DATA2
      </button>
      <h1>USER LIST</h1>
      <div className="row">
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div className="col-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
                alt=""
              />
              <h6>{name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Userspost;
