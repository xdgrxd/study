import { useEffect, useState } from "react";
import "./Cep.css";
import { useFetch } from "../hooks/useFetch";

const Cep = () => {
  const [userCep, setUserCep] = useState("");

  const url = `https://brasilapi.com.br/api/cep/v1/${userCep}`;
  const { data: cepData } = useFetch(userCep.length === 8 ? url : null);

  useEffect(() => {
    if (userCep.length === 8) {
      console.log("ok");
      console.log(cepData);
    }
  }, [cepData]);

  return (
    <div>
      <input
        type="number"
        name="userCep"
        onChange={(e) => setUserCep(e.target.value)}
        placeholder="Insert your CEP here..."
      />

      <ul>
        {cepData && (
          <>
            <li>City: {cepData.city}</li>
            <li>State: {cepData.state}</li>
            <li>Street: {cepData.street}</li>
            <li>CEP: {cepData.cep}</li>
          </>
        )}
        
        {!cepData && <p>CEP not found.</p>}
      </ul>
    </div>
  );
};

export default Cep;
