import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultBackground from "../../components/DefaultBackground";
import Logo from "../../components/Logo";
import apiClient from "../../clients/apiClient";
import { useUser } from "../../contexts/UserContext";
import User from "../../types/User";

const SplashScreen = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const verifyUserData = async () => {
    const token = localStorage.getItem("token");

    if (!token) return sendToStarter();

    try {
      const user = await apiClient.getMe();
      setUser(user);
      verifyUserRoute(user);
    } catch (error: any) {
      alert(error!.error);
    }
  };

  const verifyUserRoute = (user: User) => {
    if (!user.group_id) return sendToGroupCode();
    if (user.is_leader) return sendToLeaderMeetings();
    sendToMemberMeetings();
  };

  const sendToStarter = () => navigate("/starter");
  const sendToLeaderMeetings = () => navigate("/leader/meetings");
  const sendToMemberMeetings = () => navigate("/member/meetings");
  const sendToGroupCode = () => navigate("/group-code");

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
