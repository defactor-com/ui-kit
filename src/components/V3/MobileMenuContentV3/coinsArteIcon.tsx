import React from 'react'

interface IconsType {
  width?: number
  height?: number
  color?: string
}

const CoinsArteIcon: React.FC<IconsType> = ({
  width = 24,
  height = 24,
  color = '#E0A225'
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.101 4C11.3636 2.76281 13.0927 2 15 2C18.866 2 22 5.13401 22 9C22 10.9073 21.2372 12.6365 19.9999 13.899M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z'
      fill={color}
    />
  </svg>
)

export default CoinsArteIcon
