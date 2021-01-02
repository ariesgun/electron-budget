import Routes from "../routes";
import React from "react";

const { Component } = require("react");

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    // Binds the fetching function so that it has access to the correct context
    this.fetchItems = this.fetchItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.markAsPacked = this.markAsPacked.bind(this);
    this.markAllAsUnpacked = this.markAllAsUnpacked.bind(this);

    this.deleteItem = this.deleteItem.bind(this);
    this.deleteUnpackedItems = this.deleteUnpackedItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    this.props
      .database('items')
      .select()
      .then(items => this.setState({ items }))
      .catch(console.error);
  }

  addItem() {
    this.props
      .database('items')
      .insert(item)
      .then(this.fetchItems);
  }

  markAsPacked() {
    this.props
      .database('items')
      .where('id', '=', item.id)
      .update({
        packed: !item.packed
      })
      .then(this.fetchItems)
      .catch(console.error);
  }

  markAllAsUnpacked() {
    this.props
      .database('items')
      .select()
      .update({
        packed: false
      })
      .then(this.fetchItems)
      .catch(console.error);
  }

  deleteItem() {
    this.props
      .database('items')
      .where('id', item.id)
      .delete()
      .then(this.fetchItems)
      .catch(console.error);
  }

  deleteUnpackedItems() {
    this.props
      .database('items')
      .where('packed', false)
      .delete()
      .then(this.fetchItems)
      .catch(console.error);
  }

  render() {
    return (
      <div>
          <Routes />
      </div>
    );
  }
}

export default Application;