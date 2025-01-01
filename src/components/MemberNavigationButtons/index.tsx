import NavigationButtons from "../NavigationButtons";
import { MdHome } from "react-icons/md";

const MemberNavigationButtons = () => {
  const items = [{ Icon: MdHome, redirect: "/member/meetings" }];
  return <NavigationButtons items={items} />;
};

export default MemberNavigationButtons;
