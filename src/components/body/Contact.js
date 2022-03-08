import React,{Component}  from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname : "",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:"tel.",
            message: ""
        }
    }
    render(){
        return(
            <div className='container'>
                <div className='row row-content' style={{paddingLeft:"20px", textAlign:"left"}}>
                    <div className='col-12'>
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className='col-12' col-md-7>
                        <Form>
                            <FormGroup row>
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        name="firstname" 
                                        placeholder="First Name" 
                                        value={this.state.firstname}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        name="lastname" 
                                        value={this.state.lastname}
                                        placeholder="Last Name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input 
                                        type="tel" 
                                        name="telnum" 
                                        value={this.state.telnum}
                                        placeholder="Telephone Number"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input 
                                        type="email" 
                                        name="email" 
                                        value={this.state.email}
                                        placeholder="Email Address"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup >
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree}/>
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset: 1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlfor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows="12"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>

                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;