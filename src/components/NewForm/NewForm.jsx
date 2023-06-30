import styles from "./NewForm.module.css";
import WarningModal from "../WarningModal/WarningModal";
import { useState } from "react";

const userInfo = {
  username: "",
  age: "",
};

export default function NewForm({ save }) {
  const [userInput, setUserInput] = useState(userInfo);
  const [inputError, setInputError] = useState();

  const onInputChange = (event) => {
    setUserInput((current) => {
      return { ...current, [event.target.name]: event.target.value };
    });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setInputError({
        title: "Invalid input",
        message: "Please enter a valid name and age!",
      });
      return;
    }
    if (+userInput.age < 1) {
      setInputError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0 )",
      });
      return;
    }
    save(userInput);
    setUserInput(userInfo);
  };

  const pressDismiss = () => {
    setInputError(null);
  };

  return (
    <div className={styles.form}>
      {inputError && (
        <WarningModal
          title={inputError.title}
          message={inputError.message}
          dismiss={pressDismiss}
        />
      )}
      <form onSubmit={onSubmitForm} action="">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          name="username"
          onChange={onInputChange}
          value={userInput.username}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          type="number"
          id="age"
          placeholder="Enter age"
          name="age"
          onChange={onInputChange}
          value={userInput.age}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
