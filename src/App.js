import SideNav from "./component/Navbars/SideNav";
import Main from "./component/Main";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-custom overflow-hidden">
      <SideNav open={open} />
      <Main open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
