import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import MidDetail from './detailMidDetail';
import ProductComment from './ProductComment';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Mid.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Mid({resimage, rescomment, page, setPage, setDesc}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', padding: '0 12rem' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="상세페이지" {...a11yProps(0)} />
          <Tab label="상품후기" {...a11yProps(1)} />
          <Tab label="상품문의" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MidDetail resimage={resimage}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='renewed_widget'>
          <ProductComment rescomment={rescomment} page={page} setPage={setPage} setDesc={setDesc}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        상품문의
      </TabPanel>
    </Box>
  );
}
