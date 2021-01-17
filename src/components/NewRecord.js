import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecord, recordsSlice } from '../reducers/recordsReducer';
import { sumByCategorySlice } from '../reducers/SumByCategoryReducer';

const  NewRecord = () => {

  const [record, setRecord] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Consumption');
  const [account, setAccount] = useState('Rabobank EUR');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`${recordsSlice.actions.addRecord}`)
    console.log(`${sumByCategorySlice.actions}`)
    
    dispatch(addRecord({date, record, category, account, amount}))

    setRecord('');
    setDate('');
    setCategory('Consumption');
    setAccount('Rabobank EUR');
    setAmount('');
  }

  const handleRecordChanged = e => setRecord(e.target.value);
  const handleDateChanged = e => setDate(e.target.value);
  const handleCategoryChanged = e => setCategory(e.target.value);
  const handleAccountChanged = e => setAccount(e.target.value);
  const handleAmountChanged = e => setAmount(e.target.value);

  return (
    <form className="NewRecord" onSubmit={handleSubmit}>
      <div className="flex w-full">
        <div className="w-3/12 pr-3 mb-6">
          <label className="font-bold text-grey-darker block uppercase"  htmlFor="grid-date">
            Date
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" id="grid-date" value={date}  onChange={handleDateChanged} type="text" />
        </div>
        <div className="w-5/12 px-3 mb-6">
          <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-transaction">
            Transaction
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" id="grid-transaction" value={record}  onChange={handleRecordChanged} type="text" />
        </div>
      </div>
      <div className="flex w-full mb-6">
        <div className="w-2/12 pr-3 mb-6">
          <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-category">
            Category
          </label>
          <select className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" value={category}  onChange={handleCategoryChanged}  id="grid-category">
            <option value="Consumption">Consumption</option>
            <option value="Housing Rent">Housing Rent</option>
            <option value="Transportation">Transportation</option>
            <option value="Insurance">Insurance</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className="w-2/12 px-3 mb-6">
          <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-account">
            Category
          </label>
          <select className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2"  value={account}  onChange={handleAccountChanged} id="grid-account">
            <option value="Rabobank EUR">Rabobank EUR</option>
            <option value="BCA IDR">BCA IDR</option>
            <option value="CIMB Niaga IDR">CIMB Niaga IDR</option>
          </select>
        </div>
        <div className="w-2/12 px-3 mb-6">
          <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-amount">
            Amount
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" value={amount}  onChange={handleAmountChanged} id="grid-amount" type="text" />
        </div>
        <div className="w-2/12 px-3 mt-6 mb-6">
          <input className="block w-full h-full items-stretch " value="Add" type="submit"/>
        </div>
      </div>
    </form>
  );

}

NewRecord.defaultProps = {
  onSubmit: () => {}
}

export default NewRecord;