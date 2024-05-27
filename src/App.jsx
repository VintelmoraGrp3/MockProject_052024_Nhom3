import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route /* Link */,
} from "react-router-dom";

import "./App.scss";

import Header from "./routes/Header/Header";
import Footer from "./routes/Footer/footer";

import Home from "./pages/Home";
import History from "./pages/historyTrans/HistoryTrans";
import OnGoingTrans from "./pages/onGoingTrans/OnGoingTrans";
import Invitation from "./pages/invitation/Invitation";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <header>
            <Header />
          </header>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/trans-his">
              <History />
            </Route>
            <Route path="/ongoing-trans">
              <OnGoingTrans />
            </Route>
            <Route path="/invitation">
              <Invitation />
            </Route>
          </Switch>

          <footer>
            <Footer />
          </footer>
        </Router>
      </>
    );
  }
}

export default App;
