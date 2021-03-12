import React from 'react';
import TestButton from '.';

const Template = (args) => <TestButton {...args} />;
export const Default = Template.bind({});
Default.args = { text: 'Click Me', };



export default {
  title: 'atoms/TestButton',
  component: Default,
};
