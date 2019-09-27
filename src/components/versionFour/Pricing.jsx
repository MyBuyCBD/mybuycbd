import React, { Component } from "react";
import PropTypes from "prop-types";

class Pricing extends Component {
    render() {
        //Price loop start
        const priceData = this.props.pricesData.map((pricedata, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="pricingTable">
                    <h3 className="title">{pricedata.planName}</h3>
                    <div className="price-value">
                        {pricedata.price}
                        <span className="month">{pricedata.duration}</span>
                    </div>
                    <ul className="pricing-content">
                        {pricedata.contentOne && (
                            <li>{pricedata.contentOne}</li>
                        )}
                        {pricedata.contentTwo && (
                            <li>{pricedata.contentTwo}</li>
                        )}
                        {pricedata.contentThree && (
                            <li>{pricedata.contentThree}</li>
                        )}
                        {pricedata.contentFour && (
                            <li>{pricedata.contentFour}</li>
                        )}
                        {pricedata.contentFive && (
                            <li>{pricedata.contentFive}</li>
                        )}
                    </ul>
                    <a href={pricedata.link} className="btn btn-primary">
                        Fill out form for quote
                    </a>
                </div>
            </div>
        ));
        //Price loop END

        return (
            <React.Fragment>
                <section id="pricing" className="pricing-area bg-gray ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span>{this.props.sectionName}</span>
                            <h3>{this.props.sectionTitle}</h3>
                            <p>{this.props.sectionDescription}</p>
                        </div>
                        <div className="row">{priceData}</div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Pricing.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    pricesData: PropTypes.array
};

//Default Props
Pricing.defaultProps = {
    sectionName: "Pricing",
    sectionTitle: "CBD Isolate Prices",
    sectionDescription:
        "See below a few pricing options for out best selling product CBD Isolate, however if you would like another product or amount please contact us",
    pricesData: [
        {
            planName: "100 Grams of CBD Isolate",
            price: "$900 US",
            contentOne: "FREE SHIPPING IN THE US",
            contentTwo: "High Quality CBD",
            contentThree: "Fully Organic",
            contentFour: "Lab tested",
            contentFive: "Extrated with care",
            link: "#0"
        },
        {
            planName: "500 Grams of CBD Isolate",
            price: "$1700 US",
            contentOne: "FREE SHIPPING IN THE US",
            contentTwo: "High Quality CBD",
            contentThree: "Fully Organic",
            contentFour: "Lab tested",
            contentFive: "Extrated with care",
            link: "#0"
        },
        {
            planName: "1 Kilogram of CBD Isolate",
            price: "$3300 US",
            contentOne: "FREE SHIPPING IN THE US",
            contentTwo: "High Quality CBD",
            contentThree: "Fully Organic",
            contentFour: "Lab tested",
            contentFive: "Extrated with care",
            link: "#0"
        }
    ]
};

export default Pricing;
