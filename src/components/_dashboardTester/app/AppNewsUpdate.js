import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { mockImgUpdates } from '../../../utils/mockImages';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => {
  
  const time=[
    '23 minutes ago',
    '10 days ago',
    '12 days ago',
    '13 days ago',
    '15 days ago'
  ]

  const titles=[
    'Casino Royale - Game Feedback',
    'Casino Royale - Game Testing',
    'Casino Royale - Game Testing',
    'Casino Royale - Game Testing',
    'Casino Royale - Game Testing'
  ]
  
  const descriptions=[
    'Started a new project',
    'Submmited a bug',
    'Bug accepted',
    'Submmited a bug',
    'Started a new project',
  ]


  const setIndex = index + 1;
  return {
    title: titles[index],
    description: descriptions[index],
    image: mockImgUpdates(setIndex),
    postedAt: time[index]
  };
});

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 240 }}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{pr: 10, flexShrink: 0, color: 'text.secondary' }}>
        {postedAt}
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="Latest Activity" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />
    </Card>
  );
}
