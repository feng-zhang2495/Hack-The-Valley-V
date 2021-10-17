import React from "react";

import { BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'


//Pages
import Content from "./pages/Home";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";
import contact from "./pages/Contact";
import Signup from "./pages/Signup";



function App() {
  const [data, setData] = React.useState(null);

  //GET REQUEST TO API, STORES DATA INSIDE DATA
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>

      <Navbar />
      {/* MAIN PAGE */}
      <Switch>
        <Route exact path='/' component={Content}/>
        <Route path="/404" component={Error404}/>
        <Route path="/contact" component={contact}/>
        <Route path="/signup" component={Signup}/>

        <Redirect to="/404"/>
      </Switch>

    </Router>
  );
}

export default App;


// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>


//if (x == true) {
//   "yes"
// }
// else {
//   "no"
// }
// SAME AS 
// {x ? "yes" : "no"}