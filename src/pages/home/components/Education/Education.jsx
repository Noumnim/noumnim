import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import FEN from '../../../../assets/image/FEN.png'
import sonephithak from '../../../../assets/image/sonephithak.png'
import useIntersectionObserver from '../../../fadeUp/fadeUp.jsx'
import '../../../fadeUp/fadeUp.css'
const Education = () => {
    const [ref, isVisible] = useIntersectionObserver();
    const { t } = useTranslation("global");
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Grid id="education" sx={{ background: 'white', justifyContent: 'center' }} >
            <Grid sx={{ textAlign: 'center' }} className={`fade-in-up-container ${isVisible ? 'fade-in-up-heading' : ''}`}
                ref={ref}>
                <h1 style={{ fontSize: '26px', color: '#e99f4c' }}>{t("Education")}</h1>
                <p style={{ fontSize: matches ? '14px' : '8px', color: '#7B7B7B' }}>{t("Education Is")}</p>
            </Grid>
            <Grid className={`fade-in-up-container ${isVisible ? 'fade-in-up-heading' : ''}`}
                ref={ref} sx={{ margin: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Grid sx={{
                    borderRadius: '10px', display: 'flex', width: matches ? '800px' : '300px', marginTop: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.5s ease, transform 0.5s ease', '&:hover': {
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                        transform: 'scale(1.03)'
                    },
                }}>
                    <Grid>
                        <img
                            src={FEN}
                            alt="FEN"
                            style={{
                                width: matches ? '100px' : '50px',

                            }}
                        />
                    </Grid>
                    <Grid sx={{ marginLeft: '20px' }}> <h2 style={{ color: '#012970', fontSize: matches ? '18px' : '12px' }}>{t("Faculty")}</h2>
                        <h5 style={{ fontSize: matches ? '14px' : '8px' }}>{t("Computer Engineering")}</h5>
                        <h4 style={{ color: '#264143', fontSize: matches ? '16px' : '10px' }}>{t("2020-2024")}</h4>
                    </Grid>
                </Grid>
                <Grid sx={{

                    borderRadius: '10px', display: 'flex', width: matches ? '800px' : '300px', marginTop: '50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.5s ease, transform 0.5s ease', '&:hover': {
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
                        transform: 'scale(1.03)'
                    },
                }}>
                    <Grid>
                        <img
                            src={sonephithak}
                            alt="sonephithak"
                            style={{
                                width: matches ? '100px' : '50px',

                            }}
                        />
                    </Grid>
                    <Grid sx={{ marginLeft: '20px' }}> <h2 style={{ color: '#012970', fontSize: matches ? '18px' : '12px' }}>{t("Sonephithak")}</h2>
                        <h5 style={{ fontSize: matches ? '14px' : '8px' }}>{t("English Bussiness")}</h5>
                        <h4 style={{ color: '#264143', fontSize: matches ? '16px' : '10px' }}>{t("2020-2023")}</h4>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>

    )

}
export default Education;