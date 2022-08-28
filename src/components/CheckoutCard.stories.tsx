import { CheckoutCard } from "./CheckoutCard";

export default {
  title: "CheckoutCard",
  component: CheckoutCard,
};

const Template = (args) => <CheckoutCard {...args} />;

export const Default = Template.bind({});
