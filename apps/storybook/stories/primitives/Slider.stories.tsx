import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@workspace/ui/primitives/slider";
import { useState } from "react";

const meta = {
  title: "Primitives/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "object" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const Steps: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
    className: "w-[300px]",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    disabled: true,
    className: "w-[300px]",
  },
};

function ControlledSlider() {
  const [value, setValue] = useState<number[]>([33]);

  return (
    <div className="w-[300px] space-y-4">
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <p className="text-sm text-muted-foreground text-center">
        Value: {value[0]}
      </p>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledSlider />,
};

export const WithLabels: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Volume</span>
          <span className="text-muted-foreground">50%</span>
        </div>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Brightness</span>
          <span className="text-muted-foreground">75%</span>
        </div>
        <Slider defaultValue={[75]} max={100} step={1} />
      </div>
    </div>
  ),
};

export const Temperature: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Temperature</span>
        <span className="text-muted-foreground">22°C</span>
      </div>
      <Slider defaultValue={[22]} min={16} max={30} step={0.5} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>16°C</span>
        <span>30°C</span>
      </div>
    </div>
  ),
};

export const PriceRange: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Price Range</span>
        <span className="text-muted-foreground">$25 - $75</span>
      </div>
      <Slider defaultValue={[25, 75]} max={100} step={5} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>$0</span>
        <span>$100</span>
      </div>
    </div>
  ),
};
