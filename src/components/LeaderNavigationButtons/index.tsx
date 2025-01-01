import NavigationButtons from "../NavigationButtons";
import { MdHome } from "react-icons/md";
import { MdPeople } from "react-icons/md";
//import { MdBookmark } from "react-icons/md";

const LeaderNavigationButtons = () => {
  const items = [
    { Icon: MdHome, redirect: "/leader/meetings" },
    { Icon: MdPeople, redirect: "/leader/members" },
    //    { Icon: MdBookmark, redirect: "/meetings" },
  ];
  return <NavigationButtons items={items} />;
};

export default LeaderNavigationButtons;
