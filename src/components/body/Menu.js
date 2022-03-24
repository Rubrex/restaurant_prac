import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments
  }
}
class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };
  onDishSelect = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen
    });
  };
  toggleModal = () => [
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  ]
  render() {
    const menu = this.props.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          DishSelect={() => this.onDishSelect(item)}
        />
      );
    });
    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter(comments => {
        return comments.dishId === this.state.selectedDish.id
      })
      dishDetail =
        <DishDetail
          dish={this.state.selectedDish}
          comments={comments} />;
    }
    return (
      <div className="container">
        <div className="row">
          <h2 style={{ margin: '0 auto' }}>Welcome to Chinese Restaurant</h2>
          <CardColumns>
            {menu}
          </CardColumns>
          <Modal isOpen={this.state.modalOpen} >
            <ModalBody>
              {dishDetail}
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.toggleModal} color="danger">Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Menu);
