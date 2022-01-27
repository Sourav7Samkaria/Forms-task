import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import FinalForm from "./components/FinalForm";
import SimpleForm from "./components/SimpleForm";
import FormikForm from "./components/FormikForm";
import './App.css'
function App() {
  return (
    <div className="App">
     
      
        <Link to="/FormikForm">
          <div className="linkbutton">
            <button type="submit" className="linkbtn">
              Formik Form
            </button>
          </div>
        </Link>
        <Link to="/SimpleForm">
          <div className="linkbutton">
            <button type="submit" className="linkbtn">
              Simple Form
            </button>
          </div>
        </Link>
        <Link to="/FinalForm">
          
          <div className="linkbutton">
            <button type="submit" className="linkbtn">
              Final Form
            </button>
          </div>
        </Link>
      <Switch>
        <Route path="/formikform" component={FormikForm} />
        <Route path="/SimpleForm" component={SimpleForm} />
        <Route path="/FinalForm" component={FinalForm} />
      </Switch>
    </div>
  );
}

export default App;
