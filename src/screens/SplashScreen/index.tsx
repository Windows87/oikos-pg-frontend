import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultBackground from "../../components/DefaultBackground";
import Logo from "../../components/Logo";

const SplashScreen = () => {
  const navigate = useNavigate();

  const verifyUserData = () => {
    setTimeout(() => sendToStarter(), 1000);
  };

  const sendToStarter = () => navigate("/starter");

  useEffect(() => {
    verifyUserData();
  }, []);

  return (
    <DefaultBackground centered>
      <Logo />
    </DefaultBackground>
  );
};

export default SplashScreen;
