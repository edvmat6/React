// import "./App.css";
// import RegistrationForm from "./knygos.lt/registrationForm";
// import BookReview from "./knygos.lt/bookReview";
// import HomePage from "./knygos.lt/homePage";
// import NavBar from "./knygos.lt/navBar";
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
    
//       {/* <NavBar /> */}
//       <HomePage />
//       {/* <BookReview /> */}
//       {/* <RegistrationForm /> */}
//     </>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import necessary components from react-router-dom
import "./App.css";
import RegistrationForm from "./knygos.lt/registrationForm";
import BookReview from "./knygos.lt/bookReview";
import HomePage from "./knygos.lt/homePage";
import NavBar from "./knygos.lt/navBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/knygos.lt/homePage" component={HomePage} /> 
          <Route path="/knygos.lt/registrationForm" component={RegistrationForm} /> 
          <Route path="/knygos.lt/bookReview" component={BookReview} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
