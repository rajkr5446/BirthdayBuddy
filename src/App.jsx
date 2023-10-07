import Person from "./components/Person";
import List from "./components/List";

import { useState } from "react";
import { persons } from "./data";

const App = () => {
  const [users, setUsers] = useState(persons);
  return (
    <div className="main">
      <div className="container">
        <h3>{users.length} Birthdays Today</h3>
        <List users={users} />
        <button onClick={() => setUsers([])}>Clear List</button>
      </div>
    </div>
  );
};
export default App;
