import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route /* Link */,
} from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

import Home from "./pages/Home";
import History from "./pages/historyTrans/HistoryTrans";
import OnGoingTrans from "./pages/onGoingTrans/OnGoingTrans";
import Invitation from "./pages/invitation/Invitation";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          {/* header render for all module route */}
          <header>
            <Header />
          </header>

          {/* switch route */}
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

          {/* footer render for all module route */}
          <footer>
            <Footer />
          </footer>
        </Router>
      </>
    );
  }
}

export default App;
