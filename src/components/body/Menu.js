import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap'
class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
    modalOpen:false,
  };
  onDishSelect = (dish) => {
    console.log(dish);
    this.setState({ 
      selectedDish: dish,
      modalOpen: !this.state.modalOpen 
    });
  };
  toggleModal = () =>[
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  ]
  render() {
    const menu = this.state.dishes.map((item) => {
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
      dishDetail = <DishDetail dish={this.state.selectedDish} />;
    }
    return (
      <div className="container">
        <div className="row">
          {/* <div className="col-4">{menu}</div>
          <div className="col-8">{dishDetail}</div> */}
          <h2 style={{margin:'0 auto'}}>Welcome to Chinese Restaurant</h2>
          <CardColumns>
            {menu}
          </CardColumns>
          <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
            <ModalBody>
              {dishDetail}
            </ModalBody>
            <ModalFooter>
              <Button color="warning">Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
export default Menu;
