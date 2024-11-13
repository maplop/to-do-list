import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { UserType } from '../../../types/types';
import ProfileData from '../ProfileData/ProfileData';
import ChangePassword from '../ChangePassword/ChangePassword';
import { PasswordValuesType } from '../useProfileView';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabProfileProps {
  formValues: Omit<UserType, 'id'> | null,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSave: () => void
  passwordValues: PasswordValuesType,
  handleInputPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangePassword: () => void
}


const TabProfile = ({ formValues, handleChange, handleSave, passwordValues, handleInputPasswordChange, handleChangePassword }: TabProfileProps) => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Change password" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProfileData
          formValues={formValues}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ChangePassword
          passwordValues={passwordValues}
          handleInputPasswordChange={handleInputPasswordChange}
          handleChangePassword={handleChangePassword}
        />
      </CustomTabPanel>
    </Box>
  );
}

export default TabProfile
