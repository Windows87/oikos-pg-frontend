import styled from "styled-components";
import theme from "../../settings/theme";

const BaseSelect = styled.select`
  background-color: ${theme.blue.medium};
  color: white;
  font-size: 16px;
  width: 95%;
  height: 42px;
  font-weight: 600;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin: 0;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
`;

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  placeholder: string;
  options: SelectOption[];
}

const Select = ({ placeholder, options }: SelectProps) => {
  return (
    <BaseSelect>
      <option>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </BaseSelect>
  );
};

export default Select;
