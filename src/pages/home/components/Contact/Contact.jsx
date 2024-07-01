import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import IG from '../../../../assets/image/ig.svg'
import Facebook from '../../../../assets/image/facebook.svg'
import Button from '@mui/material/Button';
import useIntersectionObserver from '../../../fadeUp/fadeUp.jsx'
import  '../../../fadeUp/fadeUp.css'
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
   const matches = useMediaQuery('(min-width:600px)');
   const { t } = useTranslation("global");
  return (
    <Grid id="contact" sx={{ background: '#264143', height: '100vh' }}>
      <Grid item xs={12} sx={{ textAlign: 'center' }}  className={`fade-in-up-container ${isVisible ? 'fade-in-up-heading' : ''}`}
        ref={ref}>
        <h1 style={{ fontSize: '26px', color: '#e99f4c', padding: '80px' }}>{t("Contact")}</h1>
      </Grid>
      <Grid container justifyContent="center" spacing={2} className={`fade-in-up-container ${isVisible ? 'fade-in-up-heading' : ''}`}
        ref={ref}>
        <Grid sx={{ margin: matches ? '20px' : '10px', width: matches ? '180px' : '100px', height: matches ? '200px' : '120px', background: 'white', borderRadius: matches ? '20px' : '10px', textAlign: 'center',transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '5px 10px 18px #1282C9',
          transform: 'translateY(-10px)',
          '.phone': {
            color: '#1282C9',
          }
        }, }}>
          <LocalPhoneIcon className='phone' sx={{ width: matches ? '80px' : '40px', height: matches ? '80px' : '40px', justifyContent: 'center' ,color:'#424242'}} />
          <h4 style={{ fontSize: matches ? '16px' : '10px' ,color: '#424242',}}>{t("Tel")}</h4>
          <h6 style={{ fontSize: matches ? '12px' : '6px' ,color: '#7B7B7B',}}>+856 20 76 698 749</h6>
        </Grid>
        <Grid sx={{ margin: matches ? '20px' : '10px', width: matches ? '180px' : '100px', height: matches ? '200px' : '120px', background: 'white', borderRadius: matches ? '20px' : '10px', textAlign: 'center' ,transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '5px 10px 18px #1282C9',
          transform: 'translateY(-10px)',
          '.location': {
            color: '#1282C9',
          }
        }, }}>
          <LocationOnIcon className='location' sx={{color:'#424242', width: matches ? '80px' : '40px', height: matches ? '80px' : '40px', justifyContent: 'center' }} />
          <h4 style={{ fontSize: matches ? '16px' : '10px',color: '#424242' }}>{t("Address")}</h4>
          <h6 style={{ fontSize: matches ? '10px' : '6px' ,color: '#7B7B7B'}}>{t("Vatnak")}</h6>
        </Grid>
        <Grid sx={{ margin: matches ? '20px' : '10px', width: matches ? '180px' : '100px', height: matches ? '200px' : '120px', background: 'white', borderRadius: matches ? '20px' : '10px', textAlign: 'center',transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '5px 10px 18px #1282C9',
          transform: 'translateY(-10px)',
          '.email': {
            color: '#1282C9',
          }
        },  }}>
          <EmailIcon className='email' sx={{ width: matches ? '80px' : '40px', height: matches ? '80px' : '40px', justifyContent: 'center',color:'#424242' }} />
          <h4 style={{ fontSize: matches ? '16px' : '10px' ,color: '#424242'}}>{t("Email")}</h4>
          <h6 style={{ fontSize: matches ? '12px' : '6px',color: '#7B7B7B' }}>noumnim.tk225@gmail.com</h6>
        </Grid>

      </Grid>
     

<Grid container sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }} spacing={2}>
<Button
 href="https://www.facebook.com/profile.php?id=100011977574234"
    target="_blank"
sx={{ background: '#FFFFFF',borderRadius: '50%',padding: '6px', margin: '0 10px',display: 'flex',justifyContent: 'center',alignItems: 'center',minWidth: 'auto',
      '& img': {
        width: matches?'70px':'40px',
        filter: 'grayscale(100%)',
        transition: 'filter 0.3s ease',
      },
      '&:hover img': {
        filter: 'grayscale(0%)',
      },
    }}
  >
    <img src={IG} alt='ig' />
  </Button>
  <Button
  href="https://www.instagram.com/nnim_tsv/"
    target="_blank"
    sx={{ background: '#FFFFFF',borderRadius: '50%',padding: '6px', margin: '0 10px',display: 'flex',justifyContent: 'center',alignItems: 'center',minWidth: 'auto',
      '& img': {
        width: matches?'70px':'40px',
        filter: 'grayscale(100%)',
        transition: 'filter 0.3s ease',
      },
      '&:hover img': {
        filter: 'grayscale(0%)',
      },
    }}
  >
    <img src={Facebook} alt='facebook' />
  </Button>
</Grid>
</Grid>
  )
}
export default Contact;