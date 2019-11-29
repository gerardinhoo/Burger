import React, { Component } from 'react';
import { Route } from "react-router-dom"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData"


export class Checkout extends Component {
    state = {

        ingredients: {
            meat: 1,
            salad: 1,
            tomato: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            // query.entries => ["salad", "1"]
            ingredients[param[0]] = +param[1]
        }
        this.setState({ ingredients: ingredients })
    }


    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelledHandler={this.checkoutCancelledHandler}
                    checkoutContinuedHandler={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + "/contact-data"} component={ContactData} />
            </div>
        )
    }
}

export default Checkout
