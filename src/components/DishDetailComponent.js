import React, { Component } from "react";

import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

class DishDetail extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     selectedDish: this.props.selectedDish,
        // }
    }

    renderDish() {
        if (this.props.selectedDish != null)
            return (
                <Card>
                    <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                        <CardTitle>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
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
                                <div>
                                    <h1>{this.props.selectedDish.name} Detail !!</h1>
                                    <p>{items.comment}</p>
                                    <p>{items.author}</p>
                                    <p>{items.date}</p>
                                </div>
                            );
                        }
                    })}
                </Card>
            );
        else return <div></div>;
    }


    render() {
        return(
            <div className="row">
                {console.log(this.props.selectedDish)}
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish()}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDishDetail()}
                </div>
            </div>
        )
    }
}

export default DishDetail;