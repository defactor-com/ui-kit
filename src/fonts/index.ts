import { generalConfig } from 'config'

import { DMSans } from './dm-sans-font'

export const getFont = () => {
  switch (generalConfig.assets.fontFamily) {
    case 'DMSans':
      return DMSans
    default:
      return DMSans
  }
}
