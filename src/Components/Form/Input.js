import React from 'react';
import styles from './Input.module.css';


const Input = ({ quantidade, id, setValue, classe, ...props }) => {
  const [active, setActive] = React.useState(null);


  function handleChange({ target }) {
    setActive(target.value);
    setValue(target.value);
  }

  return (
    <div className={`${styles.input} ${classe ? 'appear' : ''}`}>
      {quantidade.map((item, index) => (
        <label
          key={item}
          htmlFor={id + index}
          className={active === item ? styles.active : ''}
        >
          {item}
          <input
            type='radio'
            id={id + index}
            name={id}
            value={item}
            checked={active === item}
            onChange={handleChange}
            {...props}
          />
        </label>
      ))}
    </div>
  );
};

export default Input;
