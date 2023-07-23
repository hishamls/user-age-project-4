import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      type={props.type || Button}
      onClick={props.onClick}
      className={classes.button}
    >
      {props.children}
    </button>
  );
}
