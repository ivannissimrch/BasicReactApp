import React, { useState } from "react";
import AddUser from "./components/AddUser.js";
import UserList from "./components/UserList.js";

function App() {
  const [userList, setUserList] = useState([]);
  const onAddUserHandler = (userName, userAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: userName, age: userAge, id: `${userName}${userAge}` },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
