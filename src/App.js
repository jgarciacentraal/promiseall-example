import * as React from "react";
import "./styles.css";

const docs = [
  { id: 42343, name: "yo", item: 3 },
  { id: 34564, name: "otro sujeto", item: 6 }
];

const apiGet = (item) => {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${item}`);
};

export default function App() {
  const [res, setRes] = React.useState(null);
  const promises = docs.map(async (n) => apiGet(n.item));
  console.log(promises);
  let response;
  React.useEffect(() => {
    async function dataFetch() {
      response = await Promise.all(promises);
    }
    dataFetch();
    setRes(response);
  }, []);

  console.log(res);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
//resolve this code
