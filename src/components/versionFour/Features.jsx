import React, { Component } from "react";
import i from "react-icofont";
import PropTypes from "prop-types";

class Features extends Component {
    render() {
        //Features loop start
        const featuredata = this.props.featuresData.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
                <div className="single-features">
                    <i className={feature.icon} />
                    <h3>{feature.featuresName}</h3>
                    <p>{feature.description}</p>
                </div>
            </div>
        ));
        //Features loop END

        return (
            <React.Fragment>
                <section
                    id="features"
                    className="features-area bg-gray ptb-100"
                >
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">{featuredata}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

Features.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    featuresData: PropTypes.array
};

Features.defaultProps = {
    sectionName: "We only sell the highest quality CBD",
    sectionTitle: "What makes us special",
    sectionDescription:
        "We only sell the best CBD products in the world.",

    featuresData: [
        {
            icon: "icofont-hand-drag1",
            featuresName: "100% Organic",
            description:
                "Our CBD only comes from fully organic farms, all natural and GMO-free industrial hemp that is grown without the use of pesticides."
        },
        {
            icon: "icofont-diamond",
            featuresName: "Sustainable Extraction",
            description:
                "Our farms use CO2 extraction systems to ensure the highest quality, potency and purity of the final product."
        },
        {
            icon: "icofont-responsive",
            featuresName: "Full Spectrum",
            description:
                "Full spectrum CBD has been proven to provide the best results. Our CBD has will give you the full benefits of all cannabinoids and terpenes."
        },
        {
            icon: "icofont-rocket",
            featuresName: "Lab Tested",
            description:
                "Our farms have had their CBD products tested in 3rd-party laboratories for the purity of their cannabinoid content, as well as the presence of solvent, toxins, and heavy metals"
        }
    ]
};
export default Features;
