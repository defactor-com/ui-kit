import React from 'react';
import EthFactrIcon from '../../Icons/v3/ethFactrIcon'; // Adjusted import path

export interface FactrTokenBadgeProps {
    icon?: React.ReactElement;
    name?: string;
    percentage?: string;
}

const FactrTokenBadge: React.FC<FactrTokenBadgeProps> = ({
    icon = <EthFactrIcon />,
    name = 'Ethereum',
    percentage = '50%',
}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <div>
                <div>{name}</div>
                <div>{percentage}</div>
            </div>
        </div>
    );
};

export default FactrTokenBadge;
