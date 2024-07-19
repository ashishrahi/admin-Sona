import Navbar from '../../../../Components/Navbar/Navbar'
import Sidebar from '../../../../Components/Sidebar/Sidebar'
import {TextField,Container, Paper} from '@mui/material';
import {Button,Box} from '@mui/material';
import { useState } from 'react';
import { useUpdateGaugesize } from '../../../../Services/fetchApi/fetchVariantDetails/mutationGaugesize.api';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import UpdateBreadcrub from './updatebreadcrubs.page'

const Update = () => {

  const{mutateAsync:updateMutate} = useUpdateGaugesize();
  const[gaugesize,setGaugesize] = useState('')
  const { id } = useParams();
  
  const handleSubmit = async(e) => {
        e.preventDefault();
       await updateMutate({id,gaugesize});
  };

  return (
    <Box className='new' style={{ display: 'flex' }}>
      <Sidebar />
      <Box className="newContainer" style={{ flex: '6' }}>
        <Navbar/>
        <Box sx={{marginLeft:'20px',marginTop:'20px'}}><UpdateBreadcrub/></Box>
        {/*Body  */}
        <Box sx={{display:'flex',flexDirection:'column',marginTop:'10px',marginLeft:'20%',width:'400px',height:'400px',alignItems:'center'}}>
        <form method='post' onSubmit={handleSubmit}>
          <Paper style={{display:'flex',backgroundColor:'white', flexDirection:'column',border:'2px,3px solid',alignItems:'center',marginTop:'50%',width:'300px',height:'80%'}}>
          <Box className="formInput" style={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            
            <TextField
              label="update Gaugesize"
              required
              autoFocus
              variant="outlined"
              value={gaugesize}
              
              name="GaugeSize"
              sx={{width:'200px',marginTop:'30%',size:'small',border:'5px 2px solid'}}
              onChange={(e)=>setGaugesize(e.target.value)}
            />
            
          </Box>
          <Button  type='submit' variant='contained' size='small' color='primary' endIcon={<AddIcon/>}
            sx={{
              marginTop: '30px', width: '150px', padding: '10px', border: 'none',
               cursor: 'pointer', alignItems: 'center',
            }}>
            Update Gaugesize
          </Button>
          </Paper>
        </form>
        </Box>
       </Box>
    </Box>
  );
}

export default Update;