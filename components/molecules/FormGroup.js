import Input from "@/components/atoms/Input";

const FormGroup = ({ label, name, type = "text", value, onChange }) => (
    <div className="mb-4">
    <Input
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormGroup;
