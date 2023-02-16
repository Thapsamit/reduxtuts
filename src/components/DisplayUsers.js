import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slice/userSlice";
const DisplayUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  console.log("from display users=", users);
  const deleteUser = (idx) => {
    dispatch(removeUser(idx));
  };
  return (
    <>
      {!users.length ? (
        <li>No Users</li>
      ) : (
        users.map((user, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBlock: "10px",
            }}
          >
            <li>{user}</li>
            <button onClick={() => deleteUser(idx)}>Delete This user</button>
          </div>
        ))
      )}
    </>
  );
};
export default DisplayUsers;
