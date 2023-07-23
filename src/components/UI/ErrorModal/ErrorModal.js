import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const ModalOverly = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p className={classes.message}>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        // note DOM IS CAPITAL
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverly
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
