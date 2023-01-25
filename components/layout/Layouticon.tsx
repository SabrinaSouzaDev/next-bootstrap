import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LogoutIcon from '@mui/icons-material/Logout';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    
    <div className="d-inline-flex">
      <BottomNavigationAction className="flex-row" label="Folder" value="folder" icon={<LogoutIcon/>} />
    </div>
    
  );
}