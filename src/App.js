import React, { useState } from "react";
import data from "./data";
function App() {
  let [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      count = 8;
    }
    setText(data.slice(0, amount));
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
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
