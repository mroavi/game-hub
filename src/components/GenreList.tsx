import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading size="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={"0px"} listStyle="none">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                flex="1"
                paddingLeft={2}
                justifyContent="flex-start" // aligns content to the left
                width="auto"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
                size="lg"
                variant={genre.id === selectedGenre?.id ? "subtle" : "ghost"}
                colorPalette={genre.id === selectedGenre?.id ? "teal" : "gray"}
              >
                <Box whiteSpace="normal" wordBreak="break-word">
                  {genre.name}
                </Box>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
