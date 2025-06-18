import { ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value: string;
};

function Input({ name, children, onChange, type, value }: Props) {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        style={{ fontWeight: "bold" }}
        className="form-label"
      >
        {children}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        className="form-control"
        value={value}
      />
    </div>
  );
}

export default Input;
