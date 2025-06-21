import { Switch, Icon } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch.Root
      colorPalette="blue"
      size="lg"
      checked={colorMode === "dark"}
      onCheckedChange={toggleColorMode}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
          <Icon as={FaSun} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
      <Switch.Label></Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
