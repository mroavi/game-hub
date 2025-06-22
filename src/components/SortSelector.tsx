import { Button, Menu, Portal } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          Oreder by: Relevance
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="test-1">Relevance</Menu.Item>
            <Menu.Item value="test-2">Date added</Menu.Item>
            <Menu.Item value="test-3">Name</Menu.Item>
            <Menu.Item value="test-4">Release date</Menu.Item>
            <Menu.Item value="test-5">Popularity</Menu.Item>
            <Menu.Item value="test-6">Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
