import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleObjectPage = () => {
  const { id } = useParams();
  const [objectData, setObjectData] = useState({});

  useEffect(() => {
    const getSingleObject = async () => {
      const response = await axios.get(`http://localhost:3000/object/${id}`);

      setObjectData(response.data[0]);
      console.log(response.data);
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
    </div>
  );
};

export default SingleObjectPage;
