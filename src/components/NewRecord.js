import React, { Component } from 'react';

class NewRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { value } = this.state;

    event.preventDefault();
    this.props.onSubmit({value, packed: false})
    this.setState({ value: "" })
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({value});
  }

  render() {
    return (
      <form className="NewRecord" onSubmit={this.handleSubmit}>
        <div className="flex w-full">
          <div className="w-3/12 px-3 mb-6">
            <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-date">
              Date
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" id="grid-date" type="text" />
          </div>
          <div className="w-5/12 px-3 mb-6">
            <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-transaction">
              Transaction
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" id="grid-transaction" type="text" />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-2/12 px-3 mb-6">
            <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-category">
              Category
            </label>
            <select className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" id="grid-category">
              <option>Consumption</option>
              <option>Housing Rent</option>
              <option>Transportation</option>
              <option>Insurance</option>
              <option>Miscellaneous</option>
            </select>
          </div>
          <div className="w-2/12 px-3 mb-6">
            <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-account">
              Category
            </label>
            <select className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" id="grid-account">
              <option>Rabobank EUR</option>
              <option>BCA IDR</option>
              <option>CIMB Niaga IDR</option>
            </select>
          </div>
          <div className="w-2/12 px-3 mb-6">
            <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-amount">
              Amount
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" id="grid-amount" type="text" />
          </div>
          <div className="w-2/12 px-3 mt-6 mb-6">
            <input className="block w-full h-full items-stretch " value="Add" type="submit"/>
          </div>
        </div>
      </form>
    );
  };

}

NewRecord.defaultProps = {
  onSubmit: () => {}
}

export default NewRecord;