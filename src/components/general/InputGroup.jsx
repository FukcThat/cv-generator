export default function InputGroup({
  id,
  type,
  placeholder,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  "data-key": dataKey,
}) {
  return (
    <div className="input-group flex-col">
      <label htmlFor={id} className="flex-row">
        <span className="label-text">{labelText}</span>
        {optional && <span className="sidelabel--optional">optional</span>}
        {recommended && (
          <span className="sidelabel--recommended">recommended</span>
        )}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        data-key={dataKey}
      />
    </div>
  );
}
