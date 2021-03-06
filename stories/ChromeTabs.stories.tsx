import { Story } from "@storybook/react";
import "../css/chrome-tabs.css";

import { Tabs, TabsProps } from "../src/index";

export default {
  title: "Example/ChromeTabs",
  component: Tabs,
};

const Template: Story<TabsProps> = (args) => {
  return <Tabs {...args} />;
};

export const BasicExample = Template.bind({});

BasicExample.args = {
  tabs: [{
    id: "1",
    title: "Google",
    active: false,
    favicon: 'https://www.google.com/favicon.ico',
  }, {
    id: "2",
    title: "CNN",
    active: false,
    favicon: 'https://www.cnn.com/favicon.ico',
  }, {
    id: "3",
    title: "Yahoo! News",
    active: true,
    favicon: false,
  }],
};
