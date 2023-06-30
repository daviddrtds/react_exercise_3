import NewForm from "./components/NewForm/NewForm";
import NewDisplay from "./components/NewDisplay/NewDisplay";
import { useState } from "react";

const usersData = [];

function App() {
  const [newUser, setNewUser] = useState(usersData);

  const saveUser = (newItem) => {
    setNewUser((current) => {
      return [newItem, ...current];
    });
  };

  const deleteUser = (value) => {
    setNewUser((current) => {
      return current.filter((i) => i.username !== value);
    });
  };

  return (
    <>
      <NewForm save={saveUser} />
      {newUser.length && <NewDisplay deleteMe={deleteUser} data={newUser} />}
    </>
  );
}

export default App;
