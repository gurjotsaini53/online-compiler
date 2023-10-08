import { useState } from "react";
import axios from "axios";

function Main() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const handleSubmit = async () => {
    const payLoad = {
      language: "cpp",
      code,
    };

    const { data } = await axios.post("http://localhost:3000/run", payLoad);

    setOutput(data.output);

    // console.log(output);
  };

  return (
    <>
      <div className="main">
        <h1 className="heading">Online Code Compiler</h1>

        <textarea
          name=""
          id=""
          cols="60"
          rows="30"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <br />

        <button onClick={handleSubmit}>Submit</button>

        <p>{output}</p>
      </div>
    </>
  );
}

export default Main;
