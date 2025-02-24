import NavigationIcon from '@mui/icons-material/Navigation'
import { Link } from 'react-router-dom'
import Fab from '@mui/material/Fab'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Fab 
        component={Link}  // ✅ Makes Fab act like a Link
        to="/register" 
        variant="extended"
      >
        Register
        <NavigationIcon sx={{ mr: 1 }} />
      </Fab>
    </Box>
  )
}

export default Home

