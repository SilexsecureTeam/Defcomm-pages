const InputField = ({
  label,
  type = "text",
  required,
  value,
  onChange,
  error,
  ...props
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && "*"}
    </label>
    <input
      type={type}
      required={required}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      value={value}
      onChange={onChange}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
export default InputField;
