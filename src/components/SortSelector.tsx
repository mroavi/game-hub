import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronCompactDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Averate rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          Order by: {currentSortOrder?.label || "Relevance"}{" "}
          <BsChevronCompactDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
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
