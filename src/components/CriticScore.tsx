import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorPalette={score > 75 ? "green" : score > 60 ? "yellow" : "red"}
      width="fit-content"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
