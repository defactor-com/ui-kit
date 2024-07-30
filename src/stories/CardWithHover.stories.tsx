import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { CardWithHover, CardWithHoverProps } from "../components/CardWithHover";
import DocIcon from '../components/Icons/v2/docIcon';

export default {
    title: 'V2/Cards/CardWithHover',
    component: CardWithHover,
    argTypes: {
        template: { control: 'object', description: 'Template object containing id, template_name, and description' },
        isPublished: { control: 'boolean', description: 'Indicates if the template is published' },
        onClickCopy: { action: 'copied', description: 'Copy handler' },
        onClickPreview: { action: 'previewed', description: 'Preview button click handler' },
        onClickUse: { action: 'used', description: 'Use button click handler' },
        icon: { description: 'Icon component to be displayed' },
        backgroundColor: { control: 'color', description: 'Background color of the card' },
    },
    parameters: {
        layout: 'padded'
    },
} as Meta<CardWithHoverProps>;

export const Default: StoryObj<CardWithHoverProps> = {
    args: {
        template: {
            id: '1',
            template_name: "Sample Title",
            description: "Description",
        },
        isPublished: true,
        onClickCopy: () => console.log('Card copied'),
        onClickPreview: () => console.log('Preview clicked'),
        onClickUse: () => console.log('Use Template clicked'),
        icon: <DocIcon />
    }
};


