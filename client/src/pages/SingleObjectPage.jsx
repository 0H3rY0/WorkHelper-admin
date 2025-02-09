import { useEffect } from "react";
import { useParams } from "react-router";

const SingleObjectPage = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return <div>SingleObjectPage</div>;
};

export default SingleObjectPage;
