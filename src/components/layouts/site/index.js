import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import Header from '../../widgets/Header';

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
        <Header />
        <Outlet />
    </RootStyle>
  );
}
