import React, {useState} from 'react';

const Record = (props) => {

  const [inHover, setHover] = useState(false);
  const [inEdit, setEdit] = useState(false);
  const [inDelete, setDelete] = useState(false);

  return (
    <>
      <form method="POST" id="my_form" onSubmit={() => {}}></form>
      <tr key={props.id}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
        <td className="py-2 pr-2 ">
          {props.id}
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={props.description} form="my_form" /> : 
            inDelete ? <p className="line-through">{props.description}</p> :
              props.description }
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={props.date} form="my_form" /> : 
            inDelete ? <p className="line-through">{props.date}</p> :
              props.date }
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={props.category} form="my_form" /> : 
            inDelete ? <p className="line-through">{props.category}</p> :
              props.category }
        </td>
        <td className="py-2 pr-2 ">
          {inEdit ? <input className="border-b-2" type="text" value={props.account} form="my_form" /> : 
            inDelete ? <p className="line-through">{props.account}</p> :
              props.account }
        </td>
        <td className="py-2 pr-2 flex justify-between">
          {inEdit ? <input className="border-b-2" type="text" value={props.amount} form="my_form" /> :
            inDelete ? <p className="line-through">{props.amount}</p> :
              props.amount }
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
                          <button type="button" onClick={() => setEdit(false)}><i className="fas fa-check"/></button> 
                        </div>
                        <div className="px-1">
                          <button type="button" onClick={() => setEdit(false)}><i className="fas fa-times"/></button> 
                        </div>
                      </>
            }
            {inDelete && 
                      <>
                        <div className="px-1">
                          <button type="button" onClick={() => setDelete(false)}><i className="fas fa-check"/></button> 
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