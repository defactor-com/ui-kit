import React from 'react';

export interface FactrTokenBadgeProps {
    icon?: string;
    name?: string;
    percentage?: string;
}

const FactrTokenBadge: React.FC<FactrTokenBadgeProps> = ({
    icon = '/v3-ethFactrToken-icon.svg',
    name = 'Ethereum',
    percentage = '50%',
}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={icon} alt={`${name} icon`} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            <div>
                <div>{name}</div>
                <div>{percentage}</div>
            </div>
        </div>
    );
};

export default FactrTokenBadge;
