import { useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";

function App() {
  const [memos, setmemos] = useState([
    {
      title: "Memo 1",
      contents: "This is memo 1",
      createdAt: 1740469463012, //시간 값
      updatedAt: 1740469463012, //시간 값
    },
    {
      title: "Memo 2",
      contents: "This is memo 2",
      createdAt: 1740469577841, //시간 값
      updatedAt: 1740469577841, //시간 값
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
