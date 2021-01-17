import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory, editCategory } from '../reducers/categoriesReducer';

const Category = (props) => {

  const [category, setCategory] = useState(props.category);
  const [description, setDescription] = useState(props.description);

  const [inHover, setHover] = useState(false);
  const [inEdit, setEdit] = useState(false);
  const [inDelete, setDelete] = useState(false);                               

  const dispatch = useDispatch();

  const handleDeleteConfirmed = (category) => {
    dispatch(deleteCategory(category));
    setDelete(false);
  }

  const handleCategoryModified = (id, category, description) => {
    dispatch(editCategory({id, category, description}));
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
          {inEdit ? <input className="border-b-2" type="text" value={category} onChange={(e) => setCategory(e.target.value)} /> : 
            inDelete ? <p className="line-through">{category}</p> :
              category }
        </td>
        <td className="py-2 pr-2 flex justify-between">
          {inEdit ? <input className="border-b-2 w-9/12" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> : 
            inDelete ? <p className="line-through">{description}</p> :
              description }
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
                          <button type="button" onClick={() => handleCategoryModified(props.id, category, description)}><i className="fas fa-check"/></button> 
                        </div>
                        <div className="px-1">
                          <button type="button" onClick={() => setEdit(false)}><i className="fas fa-times"/></button> 
                        </div>
                      </>
            }
            {inDelete && 
                      <>
                        <div className="px-1">
                          <button type="button" onClick={() => handleDeleteConfirmed(category)}><i className="fas fa-check"/></button> 
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

export default Category;