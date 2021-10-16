import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


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
    <div className="App">
      
      <Navbar />
      {/* MAIN PAGE */}
      <Route path='/' exact render={(props) => (
        <>
          <Content />
          <p>{!data ? "Loading..." : data}</p>
        </>
      )} />
    
    </div>
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