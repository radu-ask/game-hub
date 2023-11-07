import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectOrdering: (ordering: string) => void;
  selectedOrdering: string;
}

const SortSelector = ({ onSelectOrdering, selectedOrdering }: Props) => {
  const orderings = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrdering = orderings.find((o) => o.value === selectedOrdering);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentOrdering?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderings.map((order) => (
          <MenuItem onClick={() => onSelectOrdering(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
