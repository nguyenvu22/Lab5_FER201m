import React, { Component } from "react";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    renderDish() {
        if (this.props.selectedDish != null)
            return (
                <Card>
                    <CardImg src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                        <CardTitle tag="h2" className="text-center">{this.props.selectedDish.name}</CardTitle>
                        <CardText tag="label"><strong>Description : </strong>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return <div></div>;
    }

    renderDishDetail(){
        if (this.props.selectedDish != null)
            return (
                <Card>
                    {this.props.selectedDish.comments.map((items) => {
                        if (this.props.selectedDish.id == items.id) {
                            return (
                                <CardText className="p-5">
                                    <h2 className="text-center mb-5 border border-danger rounded p-3"><strong>{this.props.selectedDish.name}</strong> Detail !!</h2>
                                    <p><strong>Comments :</strong> {items.comment}</p>
                                    <p><strong>Author :</strong>  {items.author}</p>
                                    <p><strong>Date :</strong>  {items.date}</p>
                                </CardText>
                            );
                        }
                    })}
                </Card>
            );
        else return <div></div>;
    }


    render() {
        return(
            <Row className="">
                {console.log(this.props.selectedDish)}
                <Col md="6" className="mb-2">
                    {this.renderDish()}
                </Col>
                <Col md="6" className="mb-2">
                    {this.renderDishDetail()}
                </Col>
            </Row>
        )
    }
}

export default DishDetail;