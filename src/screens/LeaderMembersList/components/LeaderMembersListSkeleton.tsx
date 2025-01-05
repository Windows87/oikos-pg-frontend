import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DefaultBackground from "../../../components/DefaultBackground";
import ScrollContainer from "../../../components/ScrollContainer";
import GapContainer from "../../../components/GapContainer";
import LeaderNavigationButtons from "../../../components/LeaderNavigationButtons";

const LeaderMembersListSkeleton = () => {
  return (
    <DefaultBackground gap={16}>
      <GapContainer gap={4}>
        <Skeleton width="148px" height="37px" />
        <Skeleton width="200px" height="19px" />
      </GapContainer>
      <ScrollContainer gap={8}>
        <Skeleton height="32px" borderRadius="18px" />
        <GapContainer gap={8}>
          <Skeleton height="101px" borderRadius="10px" />
          <Skeleton height="101px" borderRadius="10px" />
          <Skeleton height="101px" borderRadius="10px" />
        </GapContainer>
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMembersListSkeleton;
