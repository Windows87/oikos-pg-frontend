import { useState } from "react";
import DefaultBackground from "../../components/DefaultBackground";
import Logo from "../../components/Logo";
import FirstRegisterForm from "./components/FirstRegisterForm";
import SecondRegisterForm from "./components/SecondRegisterForm";
import apiClient from "../../clients/apiClient";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [step, setStep] = useState(0);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const saveToken = (token: string) => localStorage.setItem("token", token);

  const handleFirstForm = (name: string, email: string, password: string) => {
    setRegisterData({ name, email, password });
    setStep(1);
  };

  const handleSecondForm = async (birthday: string, whatsapp: string) => {
    if (isLoading) return;
    setIsLoading(true);
    const payload = { ...registerData, birthday, whatsapp };

    try {
      const token = await apiClient.register(payload);
      saveToken(token);
      const user = await apiClient.getMe();
      setUser(user);
      sendToGroupCode();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  const sendToGroupCode = () => navigate("/group-code");

  const steps = [
    <FirstRegisterForm onSubmit={handleFirstForm} />,
    <SecondRegisterForm onSubmit={handleSecondForm} isLoading={isLoading} />,
  ];

  return (
    <DefaultBackground centered gap={12}>
      <Logo width={40} />
      {steps[step]}
    </DefaultBackground>
  );
};

export default Register;
