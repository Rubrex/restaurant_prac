import React, { Component } from 'react';
import { Form, Input, Button, Label } from 'reactstrap'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment);
        this.setState({
            ...this.state,
            author: '',
            rating: '',
            comment: ''
        })
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Label><strong>Give us your opinion</strong></Label>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.handleInputChange}
                        required
                    /> <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="write your thoughts"
                        onChange={this.handleInputChange}
                        required
                    /> <br />
                    <Button color="primary">Submit Comment</Button>

                </Form>
            </div>
        );
    }
}

export default CommentForm;