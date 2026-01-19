import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import { RouterProvider } from "react-router";
import Home from "./components/client/Home";
import Dan from "./components/client/Dan";
import Puja from "./components/client/Puja";
import AdminPage from "./components/Admin/AdminPage";
import AdminGetUsers from "./components/Admin/AdminGetUsers";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/dan',
    element:<Dan/>
  },{
    path:'/puja',
    element:<Puja/>
  },

  //admin
  {
    path:'/admin/login',
    element:<AdminPage/>
  },
  {
    path:'/admin/login/get',
    element:<AdminGetUsers/>
  }
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
