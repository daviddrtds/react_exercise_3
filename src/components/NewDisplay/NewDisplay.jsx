import styles from "./NewDisplay.module.css";
import { v4 as uuid } from "uuid";

export default function NewDisplay({ data, deleteMe }) {
  return (
    <div className={styles.display}>
      <ul>
        {data.map((i) => {
          return (
            <div>
              <li key={uuid()}>
                {`${i.username} (${i.age} years old)`}{" "}
                <span onClick={() => deleteMe(i.username)}>delete</span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
