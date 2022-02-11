import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MediaCard from '../../components/MediaCard/index';
import Grid from '@mui/material/Grid';
import cityImage from './images/city.png';
import panoramicImage from './images/panoramic.png';
import metaImage from './images/meta.png';
import earthImage from './images/earth.png';
import cellImage from './images/cell.png';
import lunarImage from './images/lunar.png';
import zeldaImage from './images/zelda.png';
import zeldaMapImage from './images/zelda_map.png';
import scanImage from './images/scan.png';
import carImage from './images/car.png';
import developingImage from './images/developing.png';
import segmentFaultImage from './images/segmengfault.png';
import humanImage from './images/human.png';
import olympicImage from './images/olympic.png';
import './index.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const workList = [
  {
    link: '/olympic',
    title: '2022冬奥会3D趣味页面',
    description: '🐼一只萌萌的冰墩墩送给大家！',
    image: olympicImage,
    three: true
  }
];

export default class Home extends React.Component {
  render () {
    return (
      <div className="home" style={{ padding: '24px'}}>
        <Box>
          {/*<h1 className="page_title">dragonir's work list</h1>*/}
        </Box>
        <Box sx={{ width: '100%' }} style={{ maxWidth: '1200px', margin: 'auto' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {workList.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Item elevation={0} className="grid_item">
                  {item.three ? (<i className="three_logo"></i>) : '' }
                  <MediaCard link={item.link} title={item.title} image={item.image} description={item.description} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    )
  }
}