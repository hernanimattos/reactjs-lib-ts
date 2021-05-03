import React from 'react';
import { Story, Meta } from '@storybook/react';
import VStepper, { IStepper } from './VStepper/VStepper';

export default {
  title: 'Action/Stepper',
  component: VStepper,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<IStepper> = (args) => <VStepper {...args} />;

export const Stepper = Template.bind({});
Stepper.args = {
  steps: [{ label: 'teste' }, { label: 'teste1' }, { label: 'teste2' }],
  showLabel: false,
};
