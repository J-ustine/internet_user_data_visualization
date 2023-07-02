export const Select = (props) => {
  const { onChange, value, options } = props;
  return (
    <select
      className="select"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={value}
    >
      {options.map((option, index) => (
        <option key={index} value={option} defaultValue={value}>
          {option}
        </option>
      ))}
    </select>
  );
};
