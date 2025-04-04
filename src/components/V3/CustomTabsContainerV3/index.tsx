import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, SxProps, Theme, useTheme } from "@mui/material";
import React from "react";

export interface TabItem {
  value: string;
  label: string;
  icon?: React.ReactElement | string;
  tabsContent: React.ReactNode;
}

export interface CustomTabsContainerProps {
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  items: TabItem[];
  tabSx?: SxProps<Theme>;
  tabIndicatorProps?: {
    sx: SxProps<Theme>;
  };
  px?: number | string;
  width?: number | string;
  textActive?: string;
  textDisabled?: string;
}

export const defaultTabSx: SxProps<Theme> = {
  padding: 2,
  minWidth: 30,
  minHeight: 0,
  fontWeight: 700,
  fontSize: { xs: "14px", md: "18px" },
  pr: { xs: 1, md: 6 },
  pl: { xs: 1, md: 3 },
  textTransform: "none",
};

export const CustomTabsContainerV3: React.FC<CustomTabsContainerProps> = ({
  value,
  onChange,
  items,
  tabSx,
  tabIndicatorProps,
  px = 0,
  width = "100%",
  textActive = "#000000",
  textDisabled = "#797A7A",
}) => {
  const theme = useTheme();

  return (
    <Box width={width}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            scrollButtons={false}
            onChange={onChange}
            aria-label="custom tabs"
            variant="scrollable"
            textColor="inherit"
            sx={{ minHeight: "unset" }}
            TabIndicatorProps={
              tabIndicatorProps || {
                sx: { backgroundColor: theme.palette.primary.main },
              }
            }
          >
            {items.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                icon={tab.icon || undefined}
                iconPosition="start"
                sx={{
                  flex: { xs: 1, md: "initial" },
                  fontWeight: value === tab.value ? 700 : 500,
                  color: value === tab.value ? textActive : textDisabled,
                  ...defaultTabSx,
                  ...tabSx,
                  minWidth: "120px"
                }}
              />
            ))}
          </TabList>
        </Box>
        {items.map((tab) => (
          <TabPanel
            key={tab.value}
            value={tab.value}
            sx={{
              px: px,
            }}
          >
            {tab.tabsContent}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};
