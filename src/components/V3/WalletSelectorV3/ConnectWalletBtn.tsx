import React from 'react';
import Button from '@mui/material/Button';

// Define prop types for the component
interface ConnectWalletButtonProps {
  btnText: string;
  handleClick: () => void;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ 
  btnText = 'Connect Wallet', 
  handleClick = () => console.log('Handle click triggered') 
}) => {
  return (
    <Button
      sx={{ textTransform: 'none', borderRadius: 5 }}
      onClick={handleClick}
      variant="contained"
    >
      {btnText}
    </Button>
  );
};

export default ConnectWalletButton;