import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Chats from "./component/Chats";
import Task from "./component/Task";
function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chats/:id" element={<Chats />} />
          <Route path="/task" element={<Task />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
