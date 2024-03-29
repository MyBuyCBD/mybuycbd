import React, { Component } from "react";
import axios from "axios";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavBarMultiPage from "../components/common/NavBarMultiPage";
import Footer from "../components/common/Footer";

class ContactUS extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            successMsg: ""
        };
    }

    handleForm = e => {
        let that = this;
        axios
            .post("https://formcarry.com/s/akx7Tk9LZ73", this.state, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                document.getElementById("contactForm").reset();
                that.setState({
                    successMsg: "We received your submission"
                });
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {});
    };

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <React.Fragment>
                {/* NavBarMultiPage: src/components/common/NavBarMultiPage */}
                <NavBarMultiPage pageName="contact" />
                <div>
                    {/* Start Page Title Area */}
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
                                            <li>Contact</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Page Title Area */}
                    {/* Start Contact Area */}
                    <section className="contact-area bg-gray ptb-100">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6 col-md-12">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <i className="icofont-envelope" />
                                        </div>
                                        <div className="content">
                                            <h4>{this.props.emailTitle}</h4>
                                            <p>
                                                <a
                                                    href={
                                                        "mailto:" +
                                                        this.props
                                                            .emailAddressOne +
                                                        ""
                                                    }
                                                >
                                                    {this.props.emailAddressOne}
                                                </a>
                                            </p>
                                            <p>
                                                <a
                                                    href={
                                                        "mailto:" +
                                                        this.props
                                                            .emailAddressTwo +
                                                        ""
                                                    }
                                                >
                                                    {this.props.emailAddressTwo}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <i className="icofont-google-map" />
                                        </div>
                                        <div className="content">
                                            <h4>{this.props.locationTitle}</h4>
                                            <p>
                                                {
                                                    this.props
                                                        .locationAddressLineOne
                                                }
                                                <span>
                                                    {
                                                        this.props
                                                            .locationAddressLineTwo
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <span> </span>
                                    {"   "}
                                    <span> </span>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="contact-text">
                                        <h3>{this.props.contactTitle}</h3>
                                        <p>
                                            {this.props.contactDescriptionsOne}
                                        </p>
                                        <p>
                                            {this.props.contactDescriptionsTwo}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <ValidationForm
                                        id="contactForm"
                                        onSubmit={(e, formData, inputs) => {
                                            e.preventDefault();
                                            this.handleForm(formData);
                                        }}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="name"
                                                        id="name"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your name"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your email address"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="subject"
                                                        id="subject"
                                                        type="text"
                                                        //required
                                                        successMessage=""
                                                        errorMessage="Please enter your email subject"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <TextInput
                                                        name="message"
                                                        id="description"
                                                        multiline
                                                        placeholder="Your message"
                                                        className="form-control"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please write your message"
                                                        rows="5"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                        <div className="clearfix" />
                                    </ValidationForm>
                                    {this.state.successMsg !== "" ? (
                                        <h3 className="contactMsg">
                                            {this.state.successMsg}
                                        </h3>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Start Contact Area */}
                </div>
                {/* Footer: src/components/common/Footer */}
                <Footer pageName="contact" />
            </React.Fragment>
        );
    }
}

//Props Types
ContactUS.propTypes = {
    sectionName: PropTypes.string,

    phoneTitle: PropTypes.string,
    phoneNoOne: PropTypes.string,
    phoneNoTwo: PropTypes.string,
    emailTitle: PropTypes.string,
    emailAddressOne: PropTypes.string,
    emailAddressTwo: PropTypes.string,
    locationTitle: PropTypes.string,
    locationAddressLineOne: PropTypes.string,
    locationAddressLineTwo: PropTypes.string,

    contactTitle: PropTypes.string,
    contactDescriptionsOne: PropTypes.string,
    contactDescriptionsTwo: PropTypes.string
};
//Default Props
ContactUS.defaultProps = {
    sectionName: "CONTACT MyBuyCBD",

    phoneTitle: "Phone / Fax",
    phoneNoOne: "(+021) 245522455",
    phoneNoTwo: "(+021) 245522456",
    emailTitle: "E-mail",
    emailAddressOne: "sales.cbd@mybuycbd.com",
    emailAddressTwo: "",
    locationTitle: "Location",
    locationAddressLineOne: "",
    locationAddressLineTwo: "Denver, Colorado, USA",

    contactTitle: "Get in Touch..",
    contactDescriptionsOne:
        "Get in Contact with us!",

};

export default ContactUS;
