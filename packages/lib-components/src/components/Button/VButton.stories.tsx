import React from 'react';
import { Story, Meta } from '@storybook/react';

import VButton, { IBtnProps } from './VButton/VButton';

export default {
  title: 'Form/Button',
  component: VButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<IBtnProps> = (args) => <VButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  btntype: 'primary',
  children: 'Avançar',
};

export const Secundary = Template.bind({});
Secundary.args = {
  variant: 'contained',
  btntype: 'outlined',
  children: 'Avançar',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
