import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import useIntersectionObserver from '../../../fadeUp/fadeUp.jsx'
import  '../../../fadeUp/fadeUp.css'
import './index.css'
const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { t } = useTranslation("global");
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <Grid id="experience" container justifyContent="center" alignItems="center" sx={{ background: 'white', marginTop: '80px' }}>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '26px', color: '#e99f4c' }} className={`fade-in-up-container ${isVisible ? 'fade-in-up-heading' : ''}`}
        ref={ref}>{t("Experience")}</h1>
      </Grid>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator >
            <TimelineDot variant="outlined" sx={{ background: "linear-gradient(45deg, #C02425, #F0CB35)" }} />
            <TimelineConnector sx={{ background: "linear-gradient(45deg, #F27121, #E94057, #8A2387)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Grid sx={{
        background: '#F29E21',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
        borderRadius: '6px',
        color: 'white',
        padding: '10px',
        margin: '20px',
      }}>
            <h3 style={{fontSize:matches?'18px':'14px'}}>Ryobi Lao</h3>
            <h5 style={{fontSize:matches?'16px':'8px'}}>{t("front-end")}</h5>
            <p  style={{fontSize:matches?'14px':'6px'}}>{t("May")}</p>
          </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ background: "linear-gradient(45deg, #C02425, #F0CB35)" }} />
            <TimelineConnector sx={{ background: "linear-gradient(45deg, #F27121, #E94057, #8A2387)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Grid sx={{
        background: '#F29E21',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
        borderRadius: '6px',
        color: 'white',
        padding: '10px',
        margin: '20px',
      }}>
              <h3 style={{fontSize:matches?'18px':'14px'}}>IQURI Tech</h3>
              <h5 style={{fontSize:matches?'16px':'8px'}}>{t("front-end")}</h5>
              <p style={{fontSize:matches?'14px':'6px'}}>{t("June")}</p>
            </Grid></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" sx={{ background: "linear-gradient(45deg, #C02425, #F0CB35)" }} />
            <TimelineConnector sx={{ background: "linear-gradient(45deg, #F27121, #E94057, #8A2387)" }} />
          </TimelineSeparator>
          <TimelineContent><Grid sx={{
        background: '#F29E21',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
        borderRadius: '6px',
        color: 'white',
        padding: '10px',
        margin: '20px',
      }}>
            <h3 style={{fontSize:matches?'18px':'14px'}}>CEIT Support lab</h3>
            <h5 style={{fontSize:matches?'16px':'8px'}}>Graphic design & IT Support</h5>
            <p style={{fontSize:matches?'14px':'6px'}}>{t("Feb")}</p>
          </Grid></TimelineContent>
        </TimelineItem>

      </Timeline>
    </Grid>
  )
}
export default Experience;