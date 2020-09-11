import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ExampleSlice1 from '.';
import { ExampleSlice1Props } from '../../types/slices';

export default {
    title: 'ExampleSlice1',
    component: ExampleSlice1,
    argTypes: {
        background_colour: { control: 'color' },
    },
} as Meta;

const Template: Story<ExampleSlice1Props> = (args) => <ExampleSlice1 {...args} />;

export const RedSlice = Template.bind({});
RedSlice.args = {
    background_colour: 'red',
};

export const BlueSlice = Template.bind({});
BlueSlice.args = {
    background_colour: 'blue',
};
