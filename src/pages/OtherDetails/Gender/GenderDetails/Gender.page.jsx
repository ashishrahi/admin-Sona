import Sidebar from '../../../../Components/Sidebar/Sidebar'
import Navbar from '../../../../Components/Navbar/Navbar'
import Datatable from './Datatable.page'
import { Box } from '@mui/material'
import Genderbreadcrumb from './genderbreadcrubs.page'
const Gender = () => {
  return (
    <Box className='list' sx={{display:'flex'}}>
    <Sidebar />
    <Box className="listContainer" sx={{flex:'6'}}>
      <Navbar/>
     <Box className='breadcrub' marginTop={1} marginLeft={2.5}><Genderbreadcrumb/></Box> 
     <Datatable/>
        </Box>
      </Box>
  )
}

export default Gender