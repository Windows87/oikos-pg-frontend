import styled from "styled-components";
import theme from "../../../settings/theme";
import { NavigationItem } from "..";

const NavigationButtonContainer = styled.div<{ enabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 300px;
  background-color: ${(props) =>
    props.enabled ? theme.blue.lighter : theme.blue.darker};
`;

interface NavigationButtonProps {
  item: NavigationItem;
}

const NavigationButton = ({ item }: NavigationButtonProps) => {
  const enabled = false;
  return (
    <NavigationButtonContainer enabled={enabled}>
      {
        <item.Icon
          color={enabled ? "white" : theme.blue.mediumlight}
          fontSize={24}
        />
      }
    </NavigationButtonContainer>
  );
};

export default NavigationButton;
