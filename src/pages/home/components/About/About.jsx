import { Grid,  Typography } from '@mui/material';
import world from '../../../../assets/image/world.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Parallax } from 'react-parallax';
import useIntersectionObserver from '../../../fadeUp/fadeUp.jsx'
import  '../../../fadeUp/fadeUp.css'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation("global");
    const [ref, isVisible] = useIntersectionObserver();
    const matches = useMediaQuery('(min-width:900px)');
    return (
        <Grid id="about" sx={{ background: 'white',marginTop:'60px' }}>
            <Grid sx={{ textAlign: 'center' }} className={`container fade-in-up-container ${isVisible ? 'fade-in-up-heading' : ''}`}
        ref={ref}>
                <h1 style={{ fontSize: '26px', color: '#e99f4c' }}>{t("About")}</h1>
                <p style={{ fontSize: matches ? '18px' : '12px', color: '#7B7B7B' }}>
                {t("I am a passionate")}
                </p>
            </Grid>
            <Grid
                container
                className={`container fade-in-up-container ${isVisible ? 'fade-in-up-heading' : ''}`}
        ref={ref}
                justifyContent="center" alignItems="center"
                sx={{
                    textAlign: 'left',
                    padding:'50px',
                    color: '#7B7B7B',
      
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: 'flex', flexDirection: 'column',  }}
                >
                    <Typography sx={{fontSize:matches?'16px':'12px'}}>
                        <strong>{t("Name")}</strong> {t("Noumnim")}
                    </Typography>
                    <Typography sx={{fontSize:matches?'16px':'12px'}}>
                        <strong>{t("Degree")}</strong> {t("Bachelor")}
                    </Typography>
                    <Typography sx={{fontSize:matches?'16px':'12px'}}>
                        <strong>{t("Tel")}</strong> +856 20 76 698 749
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: 'flex', flexDirection: 'column'}}
                >
                    <Typography  sx={{fontSize:matches?'16px':'12px'}}>
                        <strong>{t("Address")}</strong> {t("Vatnak")}
                    </Typography>
                    <Typography  sx={{fontSize:matches?'16px':'12px'}}>
                        <strong>{t("Birthday")}</strong> {t("9 August 2002")}
                    </Typography>
                    <Typography sx={{fontSize:matches?'16px':'12px'}}>
                        <strong>{t("Email")}</strong> noumnim.tk225@gmail.com
                    </Typography>
                </Grid>
            </Grid>

            <Grid>
                <Parallax strength={600} bgImage={world} style={{ height: matches ? '150px' : '90px' }}>
                    <div className='content'>
                        <div className='text-content'>
                        </div>
                    </div>
                </Parallax>
            </Grid>

        </Grid >

    )
}
export default About;