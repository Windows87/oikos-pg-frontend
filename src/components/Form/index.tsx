import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin: 0 auto;
  align-items: center;
`;

interface FormProps {
  children: React.ReactNode;
  onSubmit?: () => void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit();
  };
  return <FormContainer onSubmit={handleSubmit}>{children}</FormContainer>;
};

export default Form;
