import Button from "../Button";
import CardButtonsContainer from "./components/CardButtonsContainer";
import CardContainer from "./components/CardContainer";
import CardText from "./components/CardText";
import CardTextContainer from "./components/CardTextContainer";
import CardTitle from "./components/CardTitle";

export interface CardButtonProps {
  text: string;
  backgroundColor?: string;
  onClick: () => void;
}

interface CardProps {
  title: string;
  children?: React.ReactElement;
  texts?: string[];
  buttons?: CardButtonProps[];
  backgroundColor?: string;
}

const Card = ({
  title,
  children,
  texts,
  buttons,
  backgroundColor,
}: CardProps) => {
  return (
    <CardContainer backgroundColor={backgroundColor}>
      <CardTitle>{title}</CardTitle>
      {children ? children : null}
      {texts && (
        <CardTextContainer>
          {texts?.map((text, index) => (
            <CardText key={index}>{text}</CardText>
          ))}
        </CardTextContainer>
      )}
      {buttons && (
        <CardButtonsContainer>
          {buttons?.map((button, index) => (
            <Button
              key={index}
              backgroundColor={button.backgroundColor}
              onClick={button.onClick}
              small
              lighter
            >
              {button.text}
            </Button>
          ))}
        </CardButtonsContainer>
      )}
    </CardContainer>
  );
};

export default Card;
