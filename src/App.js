import { useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";

function App() {
  const [memos, setmemos] = useState([
    {
      title: "Memo 1",
      content: "This is memo 1",
      createdAt: 1740469463012, //시간 값
      updatedAt: 1740469463012, //시간 값
    },
    {
      title: "Memo 2",
      content: "This is memo 2",
      createdAt: 1740469577841, //시간 값
      updatedAt: 1740469577841, //시간 값
    },
  ]);

  const [selectedMemoIndex, setselectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setmemos(newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();
    setmemos([
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setselectedMemoIndex(memos.length);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);

    setmemos(newMemos);

    if (index === selectedMemoIndex) {
      setselectedMemoIndex(0);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setselectedMemoIndex={setselectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
