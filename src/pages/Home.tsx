import NavigationIcon from '@mui/icons-material/Navigation'
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab'
import { Box } from '@mui/material';

const Home = () => {
  return (
    
<Box>
<Link to="Register">
  <Fab variant="extended">
    Register
    <NavigationIcon sx={{ mr: 1 }} />
  </Fab>
</Link>
</Box>

  )
}

export default Home
