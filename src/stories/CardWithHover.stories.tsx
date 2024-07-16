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
        onClickCopy: { action: 'copied', description: 'Copy handler' },
        backgroundColor: { control: 'color', description: 'Background color of the card' },
        icon: {
            control: { type: 'select', options: ['Doc', 'Plus'] },
            description: 'Icon used in the card',
            mapping: {
                Doc: <DocIcon />,
                Plus: <PlusIcon />
            }
        },
        onClickPreview: { action: 'previewed', description: 'Preview button click handler' },
        onClickUse: { action: 'used', description: 'Use button click handler' }
    },
    parameters: {
        layout: 'padded'
    },
} as Meta<CardWithHoverProps>;

export const Default: StoryObj<CardWithHoverProps> = {
    args: {
        title: "Sample Title",
        description: "Description",
        onClickCopy: () => console.log('Card copied'),
        icon: 'Doc',
        backgroundColor: '#ffffff',
        onClickPreview: () => console.log('Preview clicked'), // Added action for preview
        onClickUse: () => console.log('Use Template clicked'), // Added action for use template
    }
};
