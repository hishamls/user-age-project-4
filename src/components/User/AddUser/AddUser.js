import classes from "./AddUser.module.css";
import { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper/Wrapper";

export default function AddUser(props) {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function errorHandel() {
    setError(null);
  }
  function submitHandler(event) {
    event.preventDefault();
    const nameUserEntered2 = nameInputRef.current.value;
    const ageUserEntered2 = ageInputRef.current.value;
    if (
      nameUserEntered2.trim().length === 0 ||
      ageUserEntered2.trim().length === 0
    ) {
      setError({
        title: "Invalid  Name or Age !",
        message: "Pleas Enter a valid Name and Age!",
      });
      return;
    }
    if (+ageUserEntered2 < 1) {
      setError({
        title: "Invalid Age !",
        message: "Pleas Enter the Age > 0!",
      });
      return;
    }
    props.onAddUser(nameUserEntered2, ageUserEntered2);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandel}
        />
      )}
      <Card className={classes.box}>
        <form onSubmit={submitHandler}>
          <label htmlFor="user-name-lbl">User Name</label>
          <input
            id="user-name-input"
            type="text"
            placeholder="ex: Mohammed Sakr"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age-lbl">Age (in years)</label>
          <input
            id="age-input"
            type="number"
            // min="1"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
