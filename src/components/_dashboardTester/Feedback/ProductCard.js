import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';
import ColorPreview from '../../ColorPreview';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, gamers, status, priceSale } = product;

  return (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
      <Link to="/dashboard/paymentFeedback" color="inherit" underline="hover" component={RouterLink}>
                <Typography variant="h4" noWrap>
            <center>{name}</center>
          </Typography>
        </Link>
      <Box sx={{ pt: '75%', position: 'relative' }}>
        <ProductImgStyle src={cover} />
      </Box>
        <Link to="/dashboard/paymentFeedback" color="inherit" underline="hover" component={RouterLink}>
        </Link>
        <Stack direction="column" alignItems="center" justifyContent="space-between">
          <Typography variant="h2" align="center" sx={{color: 'green'}}>
            &nbsp;
            {price}
          </Typography>
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled'
              }}
            >
              Gamers:
            </Typography>
            &nbsp;
            {gamers}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
