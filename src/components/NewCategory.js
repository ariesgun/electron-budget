import React, { Component } from 'react';

class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      description: '',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleSubmit(event) {
    const { category, description } = this.state;

    event.preventDefault();
    // this.props.onSubmit({value, packed: false})
    console.log(category, description);
    this.setState({ category: "", description: "" })
  }

  handleCategoryChange(event) {
    const { value } = event.target;
    this.setState({category: value});
  }

  handleDescriptionChange(event) {
    const { value } = event.target;
    this.setState({description: value});
  }

  render() {
    return (
      <form className="NewCategory" onSubmit={this.handleSubmit}>
        <div className="flex w-full">
          <div className="w-3/12 pr-3 mb-6">
            <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-category">
              Category
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" value={this.state.category} onChange={this.handleCategoryChange} id="grid-category" type="text" />
          </div>
          <div className="w-5/12 px-3 mb-6">
            <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-transaction">
              Description
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" value={this.state.description}  onChange={this.handleDescriptionChange} id="grid-description" type="text" />
          </div>
          <div className="w-2/12 px-3 mt-6 mb-6">
            <input className="block w-full h-full items-stretch " value="Add" type="submit"/>
          </div>
        </div>
      </form>
    );
  };

}

NewCategory.defaultProps = {
  onSubmit: () => {}
}

export default NewCategory;