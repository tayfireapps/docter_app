import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material
import { 
    Button, 
    Typography, 
    AppBar, 
    Toolbar, 
    IconButton, 
    Box,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    CardMedia,
    Container
 } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// ----------------------------------------------------------------------

export default function Header(props) {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Contact'];
    
    
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        MUI
        </Typography>
        <Divider />
        <List>
        {navItems.map((item) => (
            <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>
    );

  return (
        <AppBar component="header" style={{ background: 'white', borderBottom: '5px solid', borderColor:'#4bbcd7', width: '100%'}}>
            <Container maxWidth="lg" className='test'>
            <Toolbar>
                <IconButton
                    // color="inherit"
                    style={{color:'#2d2d29'}}
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    style={{ padding: '10px'}}
                >
                    <RouterLink to="/">
                        <CardMedia
                            component="img"
                            // height="40"
                            // width={"100% auto"}
                            style={{ maxHeight:'40px', width:'auto'}}
                            image="/images/logo.png"
                            alt="Logo"
                        />
                    </RouterLink>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#2d2d29' }}>
                        {item}
                    </Button>
                    ))}
                </Box>
                <Box component="nav">
                    <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                    </Drawer>
                </Box>
            </Toolbar>
        </Container>
        </AppBar>
  );
}
