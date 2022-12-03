import { Avatar, ButtonGroup, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';


export default function Home() {
  return (
    <Container maxWidth="md">
      <Head>
        <title>Jiayi Zheng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mt={10}>
        <Grid container spacing={0}>
          <Grid>
            <Avatar alt="Jiayi Zheng" src="/IMG_0006.JPG" sx={{ width: 200, 
              height: 200, mr: 6 }}/>
          </Grid>
          <Grid>
            <br />
            <Typography variant='h4'>
              Jiayi (Joey) Zheng
            </Typography>

            <br />
            <Typography className={styles.shortIntro} textAlign='justify'>
              Hi there! 👋🏼 I&apos;m Joey, a 1st-year Master student at Computer <br />
              Science in the <a href="https://www.mccormick.northwestern.edu/computer-science/" 
              className={styles.NUPurple}>McCormick School of Engineering</a> at&nbsp; <br />
              <a href="https://www.northwestern.edu/" className={styles.NUPurple}>
                Northwestern University</a>.    
            </Typography>
            
            <br />
            <Grid container spacing={2}>
              <Grid>
                <IconButton>
                  <LocationOnIcon /><Typography>Evanston, IL</Typography>
                </IconButton>
              </Grid>
              <Grid>
                <IconButton>
                  <EmailIcon /><Typography><a href="mailto:jiayizheng2024@u.northwestern.edu">
                    Email</a></Typography>
                </IconButton>
              </Grid>
              <Grid>
                <IconButton>
                  <SchoolIcon /><Typography>
                  <a href="https://scholar.google.com/citations?user=hevb_cMAAAAJ&hl=en">
                    Google Scholar</a></Typography>
                </IconButton>
              </Grid>
              <Grid>
                <IconButton>
                  <LinkedInIcon /><Typography><a href="https://www.linkedin.com/in/jiayi-zheng-me/">
                    LinkedIn</a></Typography>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ margin: "16px auto" }} />

      <Box>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Research Interests</Typography>
        <Typography textAlign='justify'>
          Joey is highly interested in inventing novel wearable sensing interactive 
          technologies related to Personal Health Informatics. The goal is to computationally 
          measure, characterize, model, and detect behavior and health status, both physical 
          and psychological. The studies mainly focus on stress, mood, sleep, habit, 
          and others related to mental health, and then use that information to create 
          just-in-time, personalized health interventions.
        </Typography>
      </Box>

      <Box mt={5}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Publications</Typography>
        <Typography>(* denotes equal contribution)</Typography>

        <Typography textAlign='justify'>
          <br />
          [1] Wei Sun*, Tuochao Chen*, <b><u>Jiayi Zheng*</u></b>, Zhenyu Lei, Lucy Wang, Benjamin Steeper, 
          Peng He, Matthew Dressa, Feng Tian, Cheng Zhang.<b><i> VibroSense: Recognizing Home Activities 
          by Deep Learning Subtle Vibrations on an Interior Surface of a House from a Single Point 
          Using Laser Doppler Vibrometry. </i></b>
          The Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT) / 
          Also presented at The ACM international joint conference on pervasive and ubiquitous computing (UbiComp) 2020.
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <IconButton>
            <PictureAsPdfIcon /><Typography>
              <a href="https://dl.acm.org/doi/abs/10.1145/3411828">
                pdf</a></Typography>
          </IconButton>
          <IconButton>
            <SlideshowIcon /><Typography>
              <a href="https://www.youtube.com/watch?v=SAntPSGF2r0">
                video</a></Typography>
          </IconButton>
          <IconButton>
            <ArticleIcon /><Typography>
              <a href="https://news.cornell.edu/stories/2020/09/device-tracks-house-appliances-through-vibration-ai">
                featured on</a></Typography>
          </IconButton>
        </Box>
      
      </Box>

      {/* <Box mt={5}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Projects</Typography>
      </Box> */}

      <Box mt={5}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Education</Typography>
        <Typography textAlign='justify'>Before joining Northwestern, Joey obtained 
        a B.S. in Computer Science and Mathematics from&nbsp;
        <a href="https://www.buffalo.edu/" className={styles.UBBlue}>SUNY - University at Buffalo</a>.</Typography>
      </Box>

      <Divider sx={{ margin: "16px auto" }} />
      <Typography variant="caption" component='p' textAlign="center">
        Made by Joey using <Link href='https://mui.com/'>MUI</Link> and <Link href='https://nextjs.org/'>Next.js</Link>
      </Typography>
      <Typography variant="caption" component='p' textAlign="center">
        © 2022 jiayizheng
      </Typography>
    </Container>


    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
