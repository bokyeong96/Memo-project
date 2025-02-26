import "./index.css";

import MemoList from "../MemoList";
import SideBarHeader from "../SideBarHeader";
import SideBarFooter from "../SideBarFooter";

function SideBar({
  memos,
  addMemo,
  selectedMemoIndex,
  setselectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setselectedMemoIndex={setselectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
