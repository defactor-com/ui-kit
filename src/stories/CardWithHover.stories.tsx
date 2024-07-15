import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import { CardWithHover, CardWithHoverProps } from "../components/CardWithHover";
import DocIcon from '../components/Icons/v2/docIcon';
import PlusIcon from '../components/Icons/v2/plusIcon';

export default {
    title: 'V2/Cards/CardWithHover',
    component: CardWithHover,
    argTypes: {
        title: { control: 'text', description: 'Title of the card' },
        description: { control: 'text', description: 'Description of the card' },
        onSelect: { action: 'selected', description: 'Select action handler' },
        backgroundColor: { control: 'color', description: 'Background color of the card' },
        icon: { description: 'Icon used in the card' },
    },
    parameters: {
        layout: 'padded'
    },
} as Meta<CardWithHoverProps>;

export const Default: StoryObj<CardWithHoverProps> = {
    args: {
        title: "Sample Title",
        description: "Sample Description",
        onSelect: () => console.log('Card clicked'),
        icon: <DocIcon />,
        backgroundColor: '#ffffff'
    }
};

