import "./List.css";
import Person from "../Person";

const List = ({ users }) => {
  return (
    <>
      {users.map(({ id, name, age, image }) => {
        return <Person key={id} name={name} age={age} image={image} />;
      })}
    </>
  );
};
export default List;
