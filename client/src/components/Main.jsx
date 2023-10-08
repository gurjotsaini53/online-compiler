import { useState } from "react";

function Main() {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    console.log(code);
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
      </div>
    </>
  );
}

export default Main;
