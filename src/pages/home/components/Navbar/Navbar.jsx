import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import laos from '../../../../assets/image/laos.svg';
import english from '../../../../assets/image/english.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useTranslation } from 'react-i18next';

function ResponsiveAppBar() {
    const { t, i18n } = useTranslation("global");
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [activeSection, setActiveSection] = React.useState(null);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(laos);

    const handleAvatarClick = (image) => {
        setSelectedImage(image);
    };

    const handleModalToggle = () => {
        setModalOpen(!isModalOpen);

    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigateToSection = (getId) => {
        const section = document.getElementById(getId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(getId);
        }
    };

    React.useEffect(() => {
        const handleScroll = () => {
            const home = document.getElementById('home');
            const about = document.getElementById('about');
            const education = document.getElementById('education');
            const experience = document.getElementById('experience');
            const skills = document.getElementById('skills');
            const contact = document.getElementById('contact');
            const scrollPosition = window.scrollY + 200;

            const getOffsetTop = (element) => (element ? element.offsetTop : 0);

            if (
                scrollPosition >= getOffsetTop(home) &&
                scrollPosition < getOffsetTop(about)
            ) {
                setActiveSection('home');
            } else if (
                scrollPosition >= getOffsetTop(about) &&
                scrollPosition < getOffsetTop(education)
            ) {
                setActiveSection('about');
            } else if (
                scrollPosition >= getOffsetTop(education) &&
                scrollPosition < getOffsetTop(experience)
            ) {
                setActiveSection('education');
            } else if (
                scrollPosition >= getOffsetTop(experience) &&
                scrollPosition < getOffsetTop(skills)
            ) {
                setActiveSection('experience');
            } else if (
                scrollPosition >= getOffsetTop(skills) &&
                scrollPosition < getOffsetTop(contact)
            ) {
                setActiveSection('skills');
            } else if (scrollPosition >= getOffsetTop(contact)) {
                setActiveSection('contact');
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <AppBar  sx={{ backgroundColor: 'white', boxShadow: 'none',height:'60px'  }}>
            <Container className='container' maxWidth="xl">
                <Toolbar disableGutters >
                    <Hidden mdDown>
                        <h2 className='nameHeader'>Noumnim</h2>
                    </Hidden>
                    <Box sx={{
                        flexGrow: 5, display: { xs: 'flex', md: 'none' }, position: 'absolute',
                        top: 0,
                        right: 0,
                    }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="rgba(0, 0, 0, 1)"
                            sx={{ marginTop: '5px' }}
                        >
                            <MenuIcon sx={{ fontSize: 20 }} />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },

                            }}
                        >

                            <Button

                                onClick={() => {
                                    handleNavigateToSection("home");
                                    handleCloseNavMenu();
                                }}
                                sx={{
                                    my: 2,
                                    color: activeSection === "home" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                    display: 'block',

                                    textTransform: 'none',
                                    '&:hover': {
                                        color: '#e99f4c'
                                    },
                                }}                        >
                                {t("Home")}
                            </Button>
                            <Button

                                onClick={() => {
                                    handleNavigateToSection("about");
                                    handleCloseNavMenu();
                                }}
                                sx={{
                                    my: 2,
                                    color: activeSection === "about" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                    display: 'block',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: '#e99f4c'
                                    },
                                }}                        >
                                {t("About")}
                            </Button>
                            <Button

                                onClick={() => {
                                    handleNavigateToSection("education");
                                    handleCloseNavMenu();
                                }}
                                sx={{
                                    my: 2,
                                    color: activeSection === "education" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                    display: 'block',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: '#e99f4c'
                                    },
                                }}
                            >
                                {t("Education")}
                            </Button>
                            <Button

                                onClick={() => {
                                    handleNavigateToSection("experience");
                                    handleCloseNavMenu();
                                }}
                                sx={{
                                    my: 2,
                                    color: activeSection === "experience" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                    display: 'block',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: '#e99f4c'
                                    },
                                }}
                            >
                              {t("Experience")}

                            </Button>
                            <Button

                                onClick={() => {
                                    handleNavigateToSection("skills");
                                    handleCloseNavMenu();
                                }}
                                sx={{
                                    my: 2,
                                    color: activeSection === "skills" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                    display: 'block',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: '#e99f4c'
                                    },
                                }}
                            >
                              {t("Skills")}
                              </Button>
                            <Button

                                onClick={() => {
                                    handleNavigateToSection("contact");
                                    handleCloseNavMenu();
                                }}
                                sx={{
                                    ml: 1,
                                    my: 2,
                                    color: activeSection === "contact" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                    display: 'block',
                                    textTransform: 'none',
                                    '&:hover': {
                                        color: '#e99f4c'
                                    },
                                }}
                            >
                                {t("Contact")}
                            </Button>
                            <ListItem anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }} sx={{ height: '8px' }}>
                                <Button sx={{ height: '35px' }} onClick={() => {
                                    i18n.changeLanguage("la"); handleAvatarClick(laos); handleCloseNavMenu();
                                }}>
                                    <ListItemAvatar sx={{ display: 'flex', alignItems: 'center', textTransform: 'none', marginTop: '10px' }}>
                                        <Avatar variant="rounded" alt="laos" src={laos} sx={{ width: '30px', height: '20px' }} />
                                        <p style={{ color: '#4F4F4F', marginLeft: '10px' }}>{t("Lao")}</p>
                                    </ListItemAvatar>
                                </Button>

                            </ListItem>
                            <ListItem>
                                <Button sx={{ height: '35px' }} onClick={() => {
                                    i18n.changeLanguage("en"); handleAvatarClick(english); handleCloseNavMenu();
                                }}>
                                    <ListItemAvatar sx={{ display: 'flex', alignItems: 'center', textTransform: 'none', }}>
                                        <Avatar variant="rounded" alt="english" src={english} sx={{ width: '30px', height: '20px' }} />
                                        <p style={{ color: '#4F4F4F', marginLeft: '10px' }}>{t("English")}</p>
                                    </ListItemAvatar>
                                </Button>
                            </ListItem>
                        </Menu>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, position: 'absolute', top: 0, right: 0 }}>
                        <Button

                            onClick={() => {
                                handleNavigateToSection("home");
                            }}
                            sx={{
                                my: 2,
                                color: activeSection === "home" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                display: 'block',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#e99f4c'
                                },

                            }}                        >
                            {t("Home")}
                        </Button>
                        <Button

                            onClick={() => {
                                handleNavigateToSection("about");
                            }}
                            sx={{
                                my: 2,
                                color: activeSection === "about" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                display: 'block',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#e99f4c'
                                },
                            }}                        >
                            {t("About")}
                        </Button>
                        <Button

                            onClick={() => {
                                handleNavigateToSection("education");
                            }}
                            sx={{
                                my: 2,
                                color: activeSection === "education" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                display: 'block',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#e99f4c'
                                },
                            }}
                        >
                           {t("Education")}

                        </Button>
                        <Button

                            onClick={() => {
                                handleNavigateToSection("experience");
                            }}
                            sx={{
                                my: 2,
                                color: activeSection === "experience" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                display: 'block',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#e99f4c'
                                },
                            }}
                        >
                           {t("Experience")}
                           </Button>
                        <Button

                            onClick={() => {
                                handleNavigateToSection("skills");
                            }}
                            sx={{
                                my: 2,
                                color: activeSection === "skills" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                display: 'block',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#e99f4c'
                                },
                            }}
                        >
                           {t("Skills")}
                           </Button>
                        <Button

                            onClick={() => {
                                handleNavigateToSection("contact");
                            }}
                            sx={{
                                my: 2,
                                color: activeSection === "contact" ? '#e99f4c' : 'rgba(79, 79, 79, 1)',
                                display: 'block',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#e99f4c'
                                },
                            }}
                        >
                            {t("Contact")}
                        </Button>

                        <IconButton onClick={handleModalToggle}>
                            <Avatar variant="rounded" alt="laos" src={selectedImage} sx={{ width: '30px', height: '20px' }} />
                        </IconButton>

                        {isModalOpen && (
                            <List sx={{
                                position: 'fixed',
                                top: '60px',
                                right: '60px',
                                borderRadius: '5px',
                                bgcolor: 'background.paper',

                                boxShadow: '0px 4px 10px 4px rgba(0, 0, 0, 0.1)',
                            }}>
                                <ListItem anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }} sx={{ height: '10px' }}>
                                    <Button sx={{
                                        height: '35px'
                                    }} onClick={() => {
                                        i18n.changeLanguage("la");
                                        handleAvatarClick(laos);
                                        handleModalToggle();
                                    }}>
                                        <ListItemAvatar sx={{ display: 'flex', alignItems: 'center', textTransform: 'none' }}>
                                            <Avatar variant="rounded" alt="laos" src={laos} sx={{ width: '30px', height: '20px' }} />
                                            <p style={{
                                                color: '#4F4F4F',
                                                marginLeft: '10px',

                                            }}> {t("Lao")}</p>
                                        </ListItemAvatar>
                                    </Button>

                                </ListItem>
                                <ListItem>
                                    <Button sx={{ height: '35px' }} onClick={() => {
                                        i18n.changeLanguage("en");
                                        handleAvatarClick(english); handleModalToggle();
                                    }}>
                                        <ListItemAvatar sx={{
                                            display: 'flex', alignItems: 'center', textTransform: 'none'
                                        }}>
                                            <Avatar variant="rounded" alt="english" src={english} sx={{ width: '30px', height: '20px' }} />
                                            <p style={{ color: '#4F4F4F', marginLeft: '10px' }}>{t("English")}</p>
                                        </ListItemAvatar>
                                    </Button>
                                </ListItem>

                            </List>
                        )}
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;