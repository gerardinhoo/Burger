import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner"
import classes from "./ContactData.css";
import axios from "../../../axios-orders"

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: "Dinho",
                address: {
                    street: "street 5",
                    ZipCode: 10100,
                    country: "MaVille",
                },
                email: "dinho@gmail.com",
            },
            deliveryMethod: "fastest",
        };

        axios
            .post("/orders.json", order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push("/")
            })
            .catch(error => this.setState({ loading: false }));

    }
    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Type in your name" />
                <input className={classes.Input} type="text" name="email" placeholder="Type in your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Type in your street address" />
                <input className={classes.Input} type="text" name="postalCode" placeholder="Type in your postal code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Info</h4>
                {form}

            </div>
        )
    }
}

export default ContactData
