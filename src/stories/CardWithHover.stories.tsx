import React from 'react';
import { Meta, Story } from "@storybook/react";
import { CardWithHover, CardWithHoverProps } from "../components/CardWithHover";
import DocIcon from '../components/Icons/v2/docIcon';
import PlusIcon from '../components/Icons/v2/plusIcon';

export default {
    title: 'V2/Cards/CardWithHover',
    component: CardWithHover,
    argTypes: {
        template: {
            control: 'object',
            description: 'Template object containing id, template_name, and description'
        },
        isPublished: {
            control: 'boolean',
            description: 'Indicates if the template is published'
        },
        onClickCopy: { action: 'copied', description: 'Copy handler' },
        onClickPreview: { action: 'previewed', description: 'Preview button click handler' },
        onClickUse: { action: 'used', description: 'Use button click handler' },
        popoverItems: { control: 'object', description: 'Items for the popover menu' }
    },
    parameters: {
        layout: 'padded'
    },
} as Meta<CardWithHoverProps>;

const Template: Story<CardWithHoverProps> = (args) => <CardWithHover {...args} />;

export const Default = Template.bind({});
Default.args = {
    template: {
        id: '1',
        template_name: "Sample Title",
        description: "Description",
    },
    isPublished: true,
    onClickCopy: () => console.log('Card copied'),
    onClickPreview: () => console.log('Preview clicked'),
    onClickUse: () => console.log('Use Template clicked'),
    popoverItems: [
        { text: 'Edit', icon: <DocIcon />, action: () => console.log('Edit clicked') },
        { text: 'Duplicate', icon: <PlusIcon />, action: () => console.log('Duplicate clicked') },
        { text: 'Delete', icon: <DocIcon />, action: () => console.log('Delete clicked') }
    ]
};
