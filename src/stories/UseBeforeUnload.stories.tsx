import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { UseBeforeUnload } from './UseBeforeUnload';

export default {
  title: 'Hooks/useBeforeUnload',
  component: UseBeforeUnload,
} as ComponentMeta<typeof UseBeforeUnload>;

const Template: ComponentStory<typeof UseBeforeUnload> = (args) => <UseBeforeUnload {...args} />;

export const False = Template.bind({});
False.args = {
  enabled: false,
  message: 'sad',
};

export const FunctionFalse = Template.bind({});
FunctionFalse.args = {
  enabled: () => false,
  message: 'sad',
};

export const TrueEmptyMessage = Template.bind({});
TrueEmptyMessage.args = {
  enabled: true,
  message: false,
};

export const True = Template.bind({});
True.args = {
  enabled: true,
  message: '确认退出?',
};

export const FunctionTrue = Template.bind({});
FunctionTrue.args = {
  enabled: () => true,
  message: '确认退出?',
};
