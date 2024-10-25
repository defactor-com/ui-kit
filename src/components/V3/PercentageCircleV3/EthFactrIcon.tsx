import React from 'react'

export type IconsType = {
    height?: number
    width?: number
    color?: string
}

export interface EthFactrIconProps extends IconsType {
    backgroundColor?: string
    width?: number
    height?: number
}

export const EthFactrIcon: React.FC<EthFactrIconProps> = ({
    width = 50,
    height = 50,
    backgroundColor = '#5F66FF'
}) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_5462_9240)'>
            <path
                d='M48.7194 25.4907C48.7194 12.2885 38.0168 1.58588 24.8145 1.58588C11.6122 1.58588 0.909668 12.2885 0.909668 25.4907C0.909668 38.693 11.6122 49.3956 24.8145 49.3956C38.0168 49.3956 48.7194 38.693 48.7194 25.4907Z'
                fill={backgroundColor}
            />
            <mask
                id='mask0_5462_9240'
                style={{ maskType: 'luminance' }}
                maskUnits='userSpaceOnUse'
                x='8'
                y='9'
                width='34'
                height='33'
            >
                <path
                    d='M41.5792 9.68164H8.05029V41.3082H41.5792V9.68164Z'
                    fill='white'
                />
            </mask>
            <g mask='url(#mask0_5462_9240)'>
                <g opacity='0.6'>
                    <path
                        d='M23.9775 21.3672L13.6826 25.7794L23.9775 31.5112L34.2683 25.7794L23.9775 21.3672Z'
                        fill='white'
                    />
                </g>
                <g opacity='0.45'>
                    <path
                        d='M13.6826 25.7786L23.9775 31.5103V9.68164L13.6826 25.7786Z'
                        fill='white'
                    />
                </g>
                <g opacity='0.8'>
                    <path
                        d='M23.981 9.68164V31.5103L34.2718 25.7786L23.981 9.68164Z'
                        fill='white'
                    />
                </g>
                <g opacity='0.45'>
                    <path
                        d='M13.6826 27.6152L23.9775 41.2829V33.3469L13.6826 27.6152Z'
                        fill='white'
                    />
                </g>
                <g opacity='0.8'>
                    <path
                        d='M23.981 33.3469V41.2829L34.2799 27.6152L23.981 33.3469Z'
                        fill='white'
                    />
                </g>
            </g>
            <path
                d='M48.7194 25.4907C48.7194 12.2885 38.0168 1.58588 24.8145 1.58588C11.6122 1.58588 0.909668 12.2885 0.909668 25.4907C0.909668 38.693 11.6122 49.3956 24.8145 49.3956C38.0168 49.3956 48.7194 38.693 48.7194 25.4907Z'
                stroke='white'
                strokeWidth='0.620906'
            />
        </g>
        <defs>
            <clipPath id='clip0_5462_9240'>
                <rect
                    width='49.0515'
                    height='49.0515'
                    fill='white'
                    transform='translate(0.288574 0.660156)'
                />
            </clipPath>
        </defs>
    </svg>
)
