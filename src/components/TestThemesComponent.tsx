import React from 'react';
import { Button, Typography, Container } from '@mui/material';

export interface TestThemesComponentProps {
  title: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
}

const TestThemesComponent: React.FC<TestThemesComponentProps> = ({
  title,
  primaryButtonLabel,
  secondaryButtonLabel,
}) => {
  return (
    <Container
      sx={{
        textAlign: 'center',
        padding: 4,
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body1" sx={{ my: 3 }}>
        This component demonstrates the application of MUI themes using different styles and colors.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ margin: 2 }}
      >
        {primaryButtonLabel}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ margin: 2 }}
      >
        {secondaryButtonLabel}
      </Button>
    </Container>
  );
};

export default TestThemesComponent;
