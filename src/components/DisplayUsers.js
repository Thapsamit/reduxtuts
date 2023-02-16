import React from "react";
import { useSelector } from "react-redux";
const DisplayUsers = () => {
  const users = useSelector((state) => state.user);
  console.log("from display users=", users);
  return (
    <>
      {!users.length ? (
        <li>No Users</li>
      ) : (
        users.map((user, idx) => <li key={idx}>{user}</li>)
      )}
    </>
  );
};
export default DisplayUsers;
