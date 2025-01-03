import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BaseCreateAccountText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

const CreateAccountText = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/register");

  return (
    <BaseCreateAccountText onClick={handleClick}>
      Criar Conta
    </BaseCreateAccountText>
  );
};

export default CreateAccountText;
