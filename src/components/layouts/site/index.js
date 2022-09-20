import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------


const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

// ----------------------------------------------------------------------

export default function SiteLayout() {
  return (
    <RootStyle>
        <div className='DashboardNavbar'></div>
        <div className='DashboardSidebar'></div>
        <Outlet />
    </RootStyle>
  );
}
