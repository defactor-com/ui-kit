import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { MainCard, MainCardProps } from "../components/MainCard";
import PlusIcon from '../components/Icons/v2/plusIcon';
import DocIcon from '../components/Icons/v2/docIcon';

export default {
    title: 'V2/Cards/MainCard',
    component: MainCard,
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
} as Meta<MainCardProps>;

export const Default: StoryObj<MainCardProps> = {
    args: {
        title: "Sample Title",
        description: "Sample Description",
        onSelect: () => console.log('Card clicked'),
        icon: <DocIcon />
    }
};

export const CreateNewTemplate: StoryObj<MainCardProps> = {
    args: {
        title: "Create New Template",
        description: "Shrort Description",
        onSelect: () => console.log('Card clicked'),
        icon: <PlusIcon />,
        backgroundColor: '#e8e9fa'
    }
};
