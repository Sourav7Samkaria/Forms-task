import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import FinalForm from "./components/FinalForm";
import SimpleForm from "./components/SimpleForm";
import FormikForm from "./components/FormikForm";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="center">
        <Link to="/FormikForm">
          <div className="linkButton">
            <button type="submit" className="linkBtn">
              Formik Form
            </button>
          </div>
        </Link>
        <Link to="/SimpleForm">
          <div className="linkButton">
            <button type="submit" className="linkBtn">
              Simple Form
            </button>
          </div>
        </Link>
        <Link to="/FinalForm">
          <div className="linkButton">
            <button type="submit" className="linkBtn">
              Final Form
            </button>
          </div>
        </Link>
      </div>
      <Switch>
        <Route path="/formikform" component={FormikForm} />
        <Route path="/SimpleForm" component={SimpleForm} />
        <Route path="/FinalForm" component={FinalForm} />
      </Switch>
    </div>
  );
}

export default App;
