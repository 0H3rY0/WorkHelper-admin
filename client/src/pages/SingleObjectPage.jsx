import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleObjectPage = () => {
  const { id } = useParams();
  const [objectData, setObjectData] = useState({});
  // const [objectUsers, setObjectUsers] = useState([]);

  useEffect(() => {
    const getSingleObject = async () => {
      const response = await axios.get(`http://localhost:3000/object/${id}`);
      // const usersResponse = await axios.get(
      //   `http://localhost:3000/object/users/${id}`
      // );

      // setObjectUsers(usersResponse.data);
      setObjectData(response.data[0]);
    };

    getSingleObject();
  }, [id]);

  return (
    <div>
      {objectData ? (
        Object.values(objectData).map((value, index) => (
          <p key={index}>{value}</p>
        ))
      ) : (
        <p>No data</p>
      )}

      <h2 className="text-2xl font-bold">Users: </h2>

      {/* {objectData ? (
        objectUsers.map((item) =>
          Object.values(item).map((value, index) => (
            <div key={index}>{value}</div>
          ))
        )
      ) : (
        <p>No data</p>
      )} */}
    </div>
  );
};

export default SingleObjectPage;
