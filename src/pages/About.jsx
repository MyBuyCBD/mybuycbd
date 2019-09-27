import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import NavBarMultiPage from "../components/common/NavBarMultiPage";
import Footer from "../components/common/Footer";

class About extends React.Component {
    render(){
        const aboutData = this.props.aboutsData.map((about, index) => (
            <React.Fragment key={index}>
                {index % 2 === 0 ? (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <img src={about.image} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mb-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mt-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <img src={about.image} alt="img" />
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        ));
        return (
            <React.Fragment>
                <NavBarMultiPage pageName="contact" />
                <div className="page-title">
                    <div className="pattern-2" />
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h3>{this.props.sectionName}</h3>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <i className="icofont-thin-right" />
                                        </li>
                                        <li>About</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="about" className="about-area ptb-50">
                    <div className="container">
                        <div className="section-title">
                            <h3>MyBuyCBD Sells the highest quality CBD in America</h3>
                            <p>
                                Find out why we are the best, ask for a free quote and have your CBD shipped to your doorstep
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h3>{this.props.aboutTitle}</h3>
                                    <p>{this.props.aboutDescription}</p>
                                    <ul className="pull-left">
                                        {this.props.aboutListItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemOne}
                                            </li>
                                        )}

                                        {this.props.aboutListItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemTwo}
                                            </li>
                                        )}
                                        {this.props.aboutListItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemThree}
                                            </li>
                                        )}
                                        {this.props.aboutListItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFour}
                                            </li>
                                        )}
                                    </ul>
                                    <ul>
                                        {this.props.aboutListItemFive && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFive}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSix && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSix}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSeven && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSeven}
                                            </li>
                                        )}
                                        {this.props.aboutListItemEight && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemEight}
                                            </li>
                                        )}
                                    </ul>

                                 </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img
                                        src={this.props.aboutImage}
                                        alt="about"
                                    />
                                </div>
                            </div>
                        </div>
                        {aboutData}
                    </div>
            </section>

                <Footer pageName="contact" />
            </React.Fragment>
        );
    }
}

//Props Types
About.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutImage: PropTypes.string,
    aboutTitle: PropTypes.string,
    aboutDescription: PropTypes.string,
    aboutListItemOne: PropTypes.string,
    aboutListItemTwo: PropTypes.string,
    aboutListItemThree: PropTypes.string,
    aboutListItemFour: PropTypes.string,
    aboutListItemFive: PropTypes.string,
    aboutListItemSix: PropTypes.string,
    aboutListItemSeven: PropTypes.string,
    aboutListItemEight: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    aboutImage: require("../assets/img/3rd_Party_Lab_Test.png"),
    aboutTitle: "All of CBD products come from farms that go through a rigourous 3rd party lab testing",
    aboutDescription:
        "We test our CBD oil in house and with multiple third-party labs to confirm our CBD products are free from pesticides, herbicides, mold, fungi, heavy metals, and mycotoxins.",
    aboutListItemOne: "Extremly high quantities of CBD and CBDA",
    aboutListItemTwo: "Potency test came back with 0% THC",
    aboutListItemThree: "Tested Periodically",
    aboutsData: [
        {
            image: require("../assets/img/OrganicsealGIF.png"),
            position: "",
            title: "Our farms grow their plants without the use of harmful pesticides ",
            description:
                "Our CBD oil has only one ingredient, hemp! Our extracts contain 100% organic cold-pressed hemp oil and our proprietary full spectrum CBD concentrate. There are no other additives, preservatives, emulsifiers, or flavorings.",
            listItemOne: "Naturally sourced",
            listItemTwo: "No pesticides",
            listItemThree: "No GMO",
            listItemFour: "No additives"
        },
        {
            image: require("../assets/img/shipnation.jpg"),
            position: "",
            title: "MyBuyCBD ships our High Quality CBD to all 50 states in 2 days",
            description:
                "We ship our organic CDB extracts to all 50 states. The United States Farm Bill of 2018 classified industrial hemp as containing less than 0.3% THC. Because MyBuyCBD products contain less than 0.3% THC, we are allowed by U.S. Federal law to conveniently ship to your doorstep",
            listItemOne: "Get your CBD within 2 days",
            listItemTwo: "Delivery across the 50 states",
            listItemThree: "Convenient and easy",
        },

    ]
};

export default About;
