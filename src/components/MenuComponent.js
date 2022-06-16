import React, { Component } from "react";

import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

import DishDetail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Col md="5" className="m-2">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle tag="h2" className="text-dark text-center border border-info badge-pill bg-secondary">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Col>
            );
        });

        return (
            <div className="container">
                <Row className="justify-content-center mb-3">{menu}</Row>
                <DishDetail selectedDish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;
