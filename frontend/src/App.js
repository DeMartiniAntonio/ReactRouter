import {Route, RouterProvider} from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";  
import EditEvent from "./pages/EditEvent";
import EventDetails from "./pages/EventDetails";
import NewEvent from "./pages/NewEvent";
import Events from "./pages/Events";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
  { path: "/", element:<RootLayout />,
     children: [
      {index: true,  element: <Home /> },
      {path:"events", element: <EventsRoot />, children:[
        {index: true, element: <Events />},
        {path: "new", element: <NewEvent />},
        {path: ":eventId", element: <EventDetails />},
        {path: ":eventId/edit", element: <EditEvent />},
      
      ] },
      ],    
  },
]);

function App() {
  return <RouterProvider router={router} />;  
}

export default App;
