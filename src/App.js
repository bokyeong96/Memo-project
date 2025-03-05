import { useCallback, useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { setItem, getItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debounceSetItem = debounce(setItem, 5000)

function App() {
  const [memos, setmemos] = useState(getItem('memo') || []);

  const [selectedMemoIndex, setselectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setmemos((memos) => { 
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;
    debounceSetItem('memo', newMemos);

    return newMemos;
    });
  }, 
  [selectedMemoIndex],
);

  const addMemo = useCallback(() => {
    setmemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: "Untitled",
          content: "",
          createdAt: now,
          updatedAt: now,
        },
      ];

    debounceSetItem('memo', newMemos);

    return newMemos;
    });
    setselectedMemoIndex(memos.length);
  },[memos]);

  const deleteMemo = useCallback(
    (index) => {
      setmemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debounceSetItem('memo', newMemos);

        return newMemos;
      });
    if (index === selectedMemoIndex) {
      setselectedMemoIndex(0);
    }   
  },
  [selectedMemoIndex],
);

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
