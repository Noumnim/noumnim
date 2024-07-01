import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';

// import { useEffect } from 'react';

const Skills = () => {
    const { t } = useTranslation("global");
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <Grid id="skills" container justifyContent="center" alignItems="center" sx={{ background: 'white'}}>
            <Grid item sx={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '26px', color: '#e99f4c' }}>{t("Skills")}</h1>
            </Grid>
            <Grid container sx={{ background: '#1D7A6A', padding: '10px', margin: '0 10%',borderRadius:'5px' }} spacing={2}>
  {[
    { src: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png', label: 'ReactJs' },
    { src: 'https://img.icons8.com/color/48/000000/firebase.png', label: 'Firebase' },
    { src: 'https://img.icons8.com/color/48/000000/material-ui.png', label: 'MaterialUI' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png', label: 'TailwindCSS' },
    { src: 'https://img.icons8.com/color/48/000000/html-5--v1.png', label: 'HTML5' },
    { src: 'https://img.icons8.com/color/48/000000/css3.png', label: 'CSS3' },
    { src: 'https://img.icons8.com/color/48/000000/javascript.png', label: 'JavaScript' },
    { src: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png', label: 'GitHub' }
  ].map((item, index) => (
    <Grid item xs={3} key={index}>
      <Box sx={{ background: 'rgba(0, 0, 22, 0.4)', borderRadius: '5px', textAlign: 'center',width:matches?'150px':'100',height:matches?'120px':'70px','&:hover': {
          boxShadow: '5px 10px 18px black'}}}>
        <img src={item.src} alt={item.label} style={{width:matches?'50px':'20px'}} />
        <p style={{fontSize:matches?'16px':'8px',color:'white',fontWeight:'bold'}}>{item.label}</p>
      </Box>
    </Grid>
  ))}
</Grid>
        </Grid>
    )
}
export default Skills;