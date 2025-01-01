import SubTitle from "../SubTitle";
import Title from "../Title";
import PageTitleContainer from "./components/PageTitleContainer";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <PageTitleContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </PageTitleContainer>
  );
};

export default PageTitle;
