import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/contactSlice';

export const ContactList = () => {
  const data = useSelector(state => state.contacts);

  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filterUser = () => {
    return data.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  const visible = filterUser();

  return (
    <ul className="contacts__list">
      {visible.length > 0 ? (
        visible.map(({ name, number, id }) => (
          <li className="contacts__list_item" key={id}>
            {name}: {number}
            <button
              onClick={() => dispatch(deleteUser(id))}
              className="filter__delete_button"
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p className="form__message">No such contact</p>
      )}
    </ul>
  );
};
