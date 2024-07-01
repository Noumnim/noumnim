import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pic from '../../../../assets/image/pic.png'
import { Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import './index.css'
import { useTranslation } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation("global");
  const matches = useMediaQuery('(min-width:900px)');
 
  return (
    <Box id="home" sx={{width: '100%', display: 'flex', flexDirection: 'column',height:'100vh' ,justifyContent:'center',backgroundColor:'rgba(38, 65, 67, 1)'}}>
      <Container className='container'>
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: matches ? 'flex-start' : 'center', alignItems: 'center'}}>
            <img
              src={Pic}
              alt="pic"
              style={{
                width:matches?'351px': '300px' ,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{color:'white',textAlign:matches?'none':'center'}}>
                  <h4>{t("Hello")}</h4>
                  <h1 className='hovered' data-text={t('Noumnim')}>{t("Noumnim")}</h1>
                  <h4><span>"{t('Try')}"</span></h4>
                  <Grid className="resumebtn">
                  <a href="https://drive.google.com/file/d/1CsDhMi0lmPTGbDEdORbEYo_pHiSNmH2B/view?usp=sharing" target="_blank" className="btn"><span>Resume</span> </a>
                  </Grid>
                  
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
};
export default Home;