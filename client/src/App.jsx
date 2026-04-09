import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./assets/components/Page";
import Login from "./assets/components/Login";
import Download from "./assets/components/Download"
import Admin from "./assets/components/Admin/Admin";
import Home from "./assets/components/Admin/Home";
import Customers from "./assets/components/Admin/Customers";
import Orders from "./assets/components/Admin/Orders";
import About from "./assets/components/Admin/About";
import ContactInfo from "./assets/components/Admin/ContactInfo";
import Category from "./assets/components/Admin/Category";
import Post from "./assets/components/Admin/Post";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="login" element={<Login />} />
        <Route path="/download" element={<Download/>}/>
        {/* Parent Route: This loads the Admin layout (Sidebar + Header) */}
        <Route path="/admin" element={<Admin />}>
          {/* Child Routes: These load inside the <Outlet /> of Admin */}
          <Route index element={<Home />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Post" element={<Post/>}/>
          <Route path="Category" element={<Category/>}/>
          <Route path="Orders" element={<Orders />} />
          <Route path="ContactInfo" element={<ContactInfo/>}/>
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;