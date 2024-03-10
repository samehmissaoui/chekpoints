import axios from "axios";
import { useState,useEffect } from "react";

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setListOfUsers(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchData();
    }, []);
  
return (
    <div>
        <h1>User List</h1>
        {listOfUsers.map(user => (
            <div key={user.id}>
                <h1>Name :  {user.name}</h1>
                <p> Email : {user.email}</p>
                <hr />
                </div>
        

    ))}
    </div>
)
        };

        export default UserList;