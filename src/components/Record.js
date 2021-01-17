import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecord } from '../reducers/recordsReducer';

const Record = (props) => {

  const dispatch = useDispatch();

  const [record, setRecord] = useState(props.record);
  const [date, setDate] = useState(props.date);
  const [category, setCategory] = useState(props.category);
  const [account, setAccount] = useState(props.setAccount);
  const [amount, setAmount] = useState(props.amount);

  const [inHover, setHover] = useState(false);
  const [inEdit, setEdit] = useState(false);
  const [inDelete, setDelete] = useState(false);

  const handleDeleteConfirmed = (record) => {
    dispatch(deleteRecord(record));
    setDelete(false);
  }

  const handleModifyRecordConfirmed = (id, record, date, category, account, amount) => {
    dispatch(editRecord({id, record, date, category, account, amount}));
    setEdit(false);
  }


  return (
    <>
      <tr key={props.id}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
        <td className="py-2 pr-2 ">
          {props.id}
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={record} onChange={(e) => setRecord(e.target.value)} /> : 
            inDelete ? <p className="line-through">{record}</p> :
              record }
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={date} onChange={(e) => setDate(e.target.value)} form="my_form" /> : 
            inDelete ? <p className="line-through">{date}</p> :
              date }
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={category} onChange={(e) => setCategory(e.target.value)} form="my_form" /> : 
            inDelete ? <p className="line-through">{category}</p> :
              category }
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={account} onChange={(e) => setAccount(e.target.value)} form="my_form" /> : 
            inDelete ? <p className="line-through">{account}</p> :
              account }
        </td>
        <td className="py-2 pr-2 flex justify-between">
          {inEdit ? <input className="border-b-2" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} form="my_form" /> :
            inDelete ? <p className="line-through">{amount}</p> :
              amount }
          <div className="inline-flex">
            {inHover && !inEdit && !inDelete && 
                      <>
                        <div className="px-1">
                          <button type="button" onClick={() => setEdit(true)}><i className="fas fa-edit"/></button> 
                        </div>
                        <div className="px-1">
                          <button type="button" onClick={() => setDelete(true)}><i className="fas fa-times-circle"/></button> 
                        </div>
                      </>
            }
            {inEdit && 
                      <>
                        <div className="px-1">
                          <button type="button" onClick={() => handleModifyRecordConfirmed(props.id, record, date, category, account, amount)}><i className="fas fa-check"/></button> 
                        </div>
                        <div className="px-1">
                          <button type="button" onClick={() => setEdit(false)}><i className="fas fa-times"/></button> 
                        </div>
                      </>
            }
            {inDelete && 
                      <>
                        <div className="px-1">
                          <button type="button" onClick={() => handleDeleteConfirmed(record)}><i className="fas fa-check"/></button> 
                        </div>
                        <div className="px-1">
                          <button type="button" onClick={() => setDelete(false)}><i className="fas fa-times"/></button> 
                        </div>
                      </>
            }
          </div>
        </td>
      </tr>

    </>
  );
};

export default Record;