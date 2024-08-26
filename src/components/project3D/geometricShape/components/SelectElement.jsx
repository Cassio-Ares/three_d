import "./styles.css";

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
