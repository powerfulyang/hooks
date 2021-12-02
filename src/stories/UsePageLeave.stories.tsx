import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { UsePageLeave } from './UsePageLeave';

export default {
  title: 'Hooks/usePageLeave',
  component: UsePageLeave,
} as ComponentMeta<typeof UsePageLeave>;

const Template: ComponentStory<typeof UsePageLeave> = (args) => <UsePageLeave {...args} />;

export const Test = Template.bind({});
Test.args = {};
