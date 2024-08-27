import "./styles.css";

/**
 * Componente de um input type radio 
 * @param {label, name, value, args, checked, onchange} param0 
 * @returns 
 */
export const SelectElement = ({ label, name, value, args, checked, onChange }) => {
  return (
    <label htmlFor={label} className="contentCheckBox">
      {label}
      {args}
      <input 
          type="radio"
          id={label} 
          name={name}
          value={value} 
          checked={checked}
          onChange={onChange}
          />
    </label>
  );
};
