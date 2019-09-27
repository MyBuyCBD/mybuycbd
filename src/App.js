import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Page from "react-page-loading";

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template SCSS Style
import "./assets/scss/style.scss";
import "./assets/scss/responsive.scss";

//Component Import

import HomeFour from "./pages/HomeFour";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import ContactUS from "./pages/ContactUs";
import ScrollUpBtn from "./components/common/ScrollUpBtn";


import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Page loader={"bar"} color={"#506CEA"} size={9}>
                        <Route
                            render={({ location }) => (
                                <TransitionGroup className="transition-group">
                                    <CSSTransition
                                        key={location.key}
                                        timeout={{ enter: 900, exit: 900 }}
                                        classNames="fade"
                                    >
                                        <section className="route-section">
                                            <Switch location={location}>
                                                <Route
                                                    path="/contact"
                                                    component={ContactUS}
                                                />
                                                <Route
                                                    path="/about"
                                                    component={About}
                                                />
                                                <Route
                                                    path="/services"
                                                    component={Services}
                                                />
                                                <Route
                                                    path="/team"
                                                    component={Team}
                                                />
                                                <Route
                                                    path="/faq"
                                                    component={Faq}
                                                />
                                                <Route
                                                    path="/pricing"
                                                    component={Pricing}
                                                />

                                                <Route
                                                    path="/home-four"
                                                    component={HomeFour}
                                                />

                                                <Route
                                                    path="/"
                                                    exact
                                                    component={HomeFour}
                                                />
                                                <Redirect to="/not-found" />
                                            </Switch>
                                        </section>
                                    </CSSTransition>
                                </TransitionGroup>
                            )}
                        />
                        <ScrollUpBtn />
                    </Page>
                </div>
            </div>
        );
    }
}

export default App;
