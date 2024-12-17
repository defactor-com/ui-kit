import AdminIcon from './icons/adminIcon'
import BuyBackIcon from './icons/buyBackIcon'
import EcosystemIcon from './icons/ecosystemIcon'
import GovernanceIcon from './icons/governanceIcon'
import StakingIcon from './icons/stakingIcon'
import VestingIcon from './icons/vestingIcon'

// Demo generalConfig
export const generalConfig = {
    routesDisabled: ['buy-back', 'governance'],
};

export const routes = () => {
    const arrayRoutes = [
        {
            icon: EcosystemIcon,
            text: 'ecosystem',
            path: '/',
            public: true
        },
        {
            icon: BuyBackIcon,
            text: 'buyBack',
            path: '/buy-back',
            public: true
        },
        {
            icon: StakingIcon,
            text: 'staking',
            path: '/staking',
            public: true
        },
        {
            icon: GovernanceIcon,
            text: 'governance',
            path: '/governance',
            public: true
        },
        {
            icon: VestingIcon,
            text: 'vesting',
            path: '/vesting',
            public: true
        },
        {
            icon: AdminIcon,
            text: 'admin',
            path: '/admin',
            public: false
        }
    ]

    return {
        firstRoutes: arrayRoutes
            .slice(0, 2)
            .filter(
                route =>
                    !generalConfig.routesDisabled.includes(route.path.replace('/', ''))
            ),
        secondRoutes: arrayRoutes
            .slice(2)
            .filter(
                route =>
                    !generalConfig.routesDisabled.includes(route.path.replace('/', ''))
            )
    }
}
