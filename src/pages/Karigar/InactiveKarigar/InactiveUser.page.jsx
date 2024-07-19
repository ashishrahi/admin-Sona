import Sidebar from '../../../Components/Sidebar/Sidebar'
import Navbar from '../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import InactiveBreadcrumbs from './inactivebreadcrubs.page'
const InactiveUser = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
     <Box marginLeft={2.5} marginTop={1}><InactiveBreadcrumbs/></Box> 
     <Datatable/>
        </Box>
      </Box>
  )
}

export default InactiveUser