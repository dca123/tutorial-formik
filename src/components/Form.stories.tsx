import { Form } from "./Form";

export default {
  title: "Form",
  component: Form,
  argTypes: {
    handleSubmit: { action: "submit" },
  },
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
