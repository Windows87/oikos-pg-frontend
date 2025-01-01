import NavigationButton from "./components/NavigationButton";
import NavigationButtonsContainer from "./components/NavigationButtonsContainer";

export interface NavigationItem {
  Icon: any;
  redirect: string;
}

interface NavigationButtonsProps {
  items: NavigationItem[];
}

const NavigationButtons = ({ items }: NavigationButtonsProps) => {
  return (
    <NavigationButtonsContainer>
      {items.map((item, index) => (
        <NavigationButton key={`navigation-${index}`} item={item} />
      ))}
    </NavigationButtonsContainer>
  );
};

export default NavigationButtons;
