import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Link to="/exchange">Exchange</Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/Wallet">Wallet</Link>
          </Grid>
        </Grid>
      </nav>
    </div>
  )
}

export default Home;