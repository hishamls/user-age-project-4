import Card from "../../UI/Card/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card>
      <ul className={classes.ul}>
        {props.users.map((user) => (
          <li key={user.id} className={classes.li}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
