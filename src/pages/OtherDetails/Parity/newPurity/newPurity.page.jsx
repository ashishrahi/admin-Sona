import Navbar from '../../../../Components/Navbar/Navbar'
import Sidebar from '../../../../Components/Sidebar/Sidebar'
import {TextField,Container, Paper} from '@mui/material';
import {Button,Box} from '@mui/material';
import { useState } from 'react';
import { useAddpurity } from '../../../../Services/fetchApi/fetchVariantDetails/mutationPurity.api';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Puritycrumb from './puritybreadcrubs.page'

const Add = () => {

  const{mutateAsync:addMutatePurity} = useAddpurity();
  const[purity,setPurity] = useState('')
  const { id } = useParams();
  
  const handleSubmit = async(e) => {
        e.preventDefault();
       await addMutatePurity({id,purity});
  };

  return (

    <Box className='new' style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />
      <Box className="newContainer" style={{ flex: '6' }}>
        {/* Navbar */}
        <Navbar />
        {/* BreadCrub */}
        <Box marginTop={1} marginLeft={2.5}><Puritycrumb/></Box>
        <Box sx={{display:'flex',flexDirection:'column',marginTop:'10px',marginLeft:'20%',width:'400px',height:'400px',alignItems:'center'}}>
        <form method='post' onSubmit={handleSubmit}>
          <Paper style={{display:'flex',backgroundColor:'white', flexDirection:'column',border:'2px,3px solid',alignItems:'center',marginTop:'50%',width:'300px',height:'80%'}}>
          <Box className="formInput" style={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            
            <TextField
              label="Add Purity"
              required
              autoFocus
              variant="outlined"
              value={purity}
              
              name="Purity Name"
              sx={{width:'200px',marginTop:'30%',size:'small',border:'5px 2px solid'}}
              onChange={(e)=>setPurity(e.target.value)}
            />
            
          </Box>
          <Button type='submit' variant='contained' size='small' color='primary' endIcon={<AddIcon/>}
            sx={{
              marginTop: '30px', width: '150px', padding: '10px', border: 'none',
               cursor: 'pointer', alignItems: 'center',
            }}>
            Add Purity
          </Button>
          </Paper>
        </form>
        </Box>
       </Box>
    </Box>
  );
}

export default Add;