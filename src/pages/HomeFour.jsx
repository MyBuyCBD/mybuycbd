import React, { Component } from "react";

//Components List
import NavBarMultiPage from "../components/common/NavBarMultiPage";
import Showcase from "../components/versionFour/Showcase";
import Features from "../components/versionFour/Features";
import Pricing from "../components/versionFour/Pricing";
import Footer from "../components/common/Footer";



class HomeOne extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                {/* NavBarMultiPage: src/components/common/NavBarMultiPage */}
                <NavBarMultiPage pageName="home" />
                {/* Showcase: src/components/versionFour/Showcase */}
                <Showcase />
                {/* Features: src/components/versionFour/Features */}
                <Features />
                {/* About: src/components/common/About */}
               {/* <About /> */}
                {/* Services: src/components/versionFour/Services */}
                {/* <Services /> */}
                {/* Vision: src/components/common/Vision */}
                {/* <Vision /> */}
                {/* FunFactCOunter: src/components/versionFour/FunFactCounter */}
                {/* <FunFactCOunter /> */}
                {/* JointClient: src/components/common/JoinClient */}
                {/* <JointClient /> */}
                {/* Works: src/components/common/Works */}
                {/* <Works /> */}
                {/* Team: src/components/versionFour/Team */}
                {/* <Team /> */}
                {/* Testimonial: src/components/versionFour/Testimonial */}
                {/*<Testimonial />*/}
                {/* Faq: src/components/common/FAQ */}
                {/* <Faq /> */}
                {/* Pricing: src/components/versionFour/Pricing */}
                <Pricing />
                {/* Partners: src/components/common/Partners */}
                {/* <Partners /> */}
                {/* Subscribe: src/components/common/Subscribe */}
                {/* <Subscribe /> */}
                {/* Footer: src/components/common/Footer */}
                <Footer pageName="home" />
            </React.Fragment>
        );
    }
}

export default HomeOne;
