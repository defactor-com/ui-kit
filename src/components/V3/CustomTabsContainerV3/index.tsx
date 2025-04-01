import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab, SxProps, Theme } from '@mui/material'
import React from 'react'

export interface TabItem {
  value: string
  label: string
  icon?: React.ReactElement | string
  tabsContent: React.ReactNode
}

export interface CustomTabContainerProps {
  value: string
  onChange: (event: React.SyntheticEvent, newValue: string) => void
  items: TabItem[]
  tabSx?: SxProps<Theme>
}

const defaultTabSx: SxProps<Theme> = {
  padding: 1,
  minWidth: 30,
  minHeight: 0,
  fontWeight: 700,
  fontSize: '18px',
  pr: { xs: 3, md: 6 },
  pl: 3
}

const CustomTabsContainerV3: React.FC<CustomTabContainerProps> = ({
  value,
  onChange,
  items,
  tabSx
}) => {
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={onChange}
            aria-label='custom tabs'
            textColor='inherit'
          >
            {items.map(tab => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                icon={tab.icon || undefined}
                iconPosition='start'
                sx={{ ...defaultTabSx, ...tabSx }}
              />
            ))}
          </TabList>
        </Box>
        {items.map(tab => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.tabsContent}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}

export default CustomTabsContainerV3
