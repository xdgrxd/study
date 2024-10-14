import { useParams } from "react-router-dom";

const Info = () => {
  const { idItem } = useParams();

  return (
    <div>
      <h1>More info about the product {idItem}</h1>
    </div>
  );
};

export default Info;
