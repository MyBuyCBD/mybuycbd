import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";
import { ValidationForm, TextInput, SelectGroup } from "react-bootstrap4-form-validation";


class Showcase extends Component {
    constructor(props) {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
        super(props);
        this.state = {
            name: "",
            email: "",
            quantity: "",
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
                document.getElementById("requestForm").reset();
                that.setState({
                    successMsg: "We received your submission"
                });
                document.getElementById("requestForm").reset();
            })
            .catch(function(error) {});
    };

    handleFields = e => this.setState({ [e.target.name]: e.target.value });



    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner bg-gray">
                    <div className="pattern-2" />
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="main-banner-content">
                                            <h1>{this.props.showcasenName}</h1>
                                            <p>
                                                {this.props.showcaseDescription}
                                            </p>
                                            <a
                                                href={
                                                    this.props
                                                        .showcaseBtnOneLink
                                                }
                                                className="btn btn-primary"
                                            >
                                                {this.props.showcaseBtnOneText}
                                            </a>

                                            <ModalVideo
                                                channel="youtube"
                                                isOpen={this.state.isOpen}
                                                videoId="Ci96MlZHu04"
                                                onClose={() =>
                                                    this.setState({
                                                        isOpen: false
                                                    })
                                                }
                                            />
                                            <button
                                                onClick={this.openModal}
                                                className="btn btn-secondary "
                                            >
                                                <i className="icofont-ui-play" />
                                                {this.props.showcaseBtnTwoText}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6 offset-lg-1 offset-md-0">
                                        <div className="main-banner-form">
                                            <h3>{this.props.showcaseFormName}</h3>
                                            <ValidationForm
                                                id="requestForm"
                                                onSubmit={(e, formData, inputs) => {
                                                    e.preventDefault();
                                                    this.handleForm(formData);
                                                }}
                                            >
                                                <div className="form-group">
                                                    <TextInput
                                                        name="name"
                                                        id="name"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>

                                                <div className="form-group">
                                                    <TextInput
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please enter your email address"
                                                        className="form-control"
                                                        placeholder="Your Email"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>

                                                <div className="form-group">
                                                    <SelectGroup
                                                        name="subject"
                                                        id="subject"
                                                        value={this.state.color}
                                                        required
                                                        errorMessage="Please select a option."
                                                        successMessage=""
                                                        onChange={this.handleFields}>
                                                        <option value="">- Tell us what you need -</option>
                                                        <option value="CBD Isolate">CBD Isolate</option>
                                                        <option value="CBD distillate">CBD distallite</option>
                                                        <option value="Biomass">Biomass</option>
                                                        <option value="Water Solvent CBD">Water Solvent CBD</option>
                                                    </SelectGroup>
                                                </div>

                                                <div className="form-group">
                                                    <SelectGroup
                                                        name="subject"
                                                        id="subject"
                                                        value={this.state.color}
                                                        required
                                                        errorMessage="Please select a option."
                                                        successMessage=""
                                                        onChange={this.handleFields}>
                                                        <option value="">- What approximate quantity? -</option>
                                                        <option value="0-500 grams">0-500 grams</option>
                                                        <option value="1-2 Kilo grams">1-2 Kilo grams</option>
                                                        <option value="3-10 Kilograms">3-10 Kilograms</option>
                                                        <option value="11-49 Kilograms">11-49 Kilograms</option>
                                                        <option value="Over 50 Kilograms">Over 50 Kilograms</option>
                                                    </SelectGroup>
                                                </div>

                                                <div className="form-group">
                                                    <TextInput
                                                        name="message"
                                                        id="description"
                                                        multiline
                                                        placeholder="Details"
                                                        className="form-control"
                                                        required
                                                        successMessage=""
                                                        errorMessage="Please write your message"
                                                        rows="4"
                                                        cols="30"
                                                        autoComplete="off"
                                                        onChange={
                                                            this.handleFields
                                                        }
                                                    />
                                                </div>

                                                <button type="submit" className="btn btn-primary">{this.props.showcaseFormBtnName}</button>
                                            </ValidationForm>
                                            {this.state.successMsg !== "" ? (
                                                <h3 className="contactMsg">
                                                    {this.state.successMsg}
                                                </h3>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern" />
                </div>
            </React.Fragment>
        );
    }
}

//Props Types
Showcase.propTypes = {
    showcasenName: PropTypes.string,
    showcaseDescription: PropTypes.string,
    showcaseBtnOneLink: PropTypes.string,
    showcaseBtnOneText: PropTypes.string,
    showcaseBtnTwoText: PropTypes.string,
    showcaseFormName: PropTypes.string,
    showcaseFormBtnName: PropTypes.string
};

//Default Props
Showcase.defaultProps = {
    showcasenName: "Highest Quality CBD in the Market",
    showcaseDescription:
        "MyBuyCBD sells only the highest quality CBD. We are a reseller who only sells pure and potent CBD oil, sourced from organic hemp, full-spectrum CBD extracts, extracted with ethical methods, and lab tested for quality.",
    showcaseBtnOneLink: "#about",
    showcaseBtnOneText: "Get a Quote",
    showcaseBtnTwoLink: "//https://www.youtube.com/watch?v=Ci96MlZHu04",
    showcaseBtnTwoText: "Watch A Video about CBD",
    showcaseFormName: "Request A Free Quote",
    showcaseFormBtnName: "Get a Quote",
};

export default Showcase;
