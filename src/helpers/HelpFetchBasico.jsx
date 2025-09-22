import React, { useEffect, useState } from "react";

const HelpFetchBasico = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div>HelpFetchBasico</div>
      <h1>Fetch like a pro</h1>
      <div className="card">
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HelpFetchBasico;