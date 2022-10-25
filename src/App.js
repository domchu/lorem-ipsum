import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world!");
  };

  return (
    <section className="section-center">
      <h2>Tired of boring Lorem Ipsum</h2>
      <form className="lorem-form" onClick={handleSubmit}>
        <label htmlFor="amount">paragraph</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
          repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
          repudiandae.
        </p>
      </article>
    </section>
  );
}

export default App;
