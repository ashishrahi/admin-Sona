import Navbar from '../../../Components/Navbar/Navbar'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import {TextField,Container} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {Button,Box} from '@mui/material';
import { useState } from 'react';
import { useUpdateAbout } from '../../../Services/fetchApi/fetchAbout/mutationAbout.api';

const Update = () => {

  const{mutateAsync:addUpdateMutateAbout} = useUpdateAbout();
const[about,setAbout] = useState()

  const handleSubmit = async(e) => {
        e.preventDefault();
       await addUpdateMutateAbout({about});
       setAbout('');
  };

  return (
    <Container className='new' style={{ display: 'flex' }}>
      <Sidebar />
      <Box className="newContainer" style={{ flex: '6' }}>
        <Navbar />
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px','border-color':'solid'}}>
          <form method='post' onSubmit={handleSubmit}>
          <Box style={{alignItems:'center'}}>
          <Box className="formInput" style={{ display: 'flex' ,flexDirection: 'column', gap: '10px' }}>
            
            <TextField
            label="New About"
              variant="outlined"
              name="PolicyName"
              sx={{width:'200px'}}
              value={about}
              onChange={(e)=>setAbout(e.target.value)}
            />
            
          </Box>
          <Button type='submit'  endIcon={<SendIcon/>}
            sx={{
              marginTop: '10px', width: '150px', padding: '10px', border: 'none',
               cursor: 'pointer', alignItems: 'center',
            }}>
            Update About
          </Button>
          </Box>
        </form>
        </Box>
        </Box>
    </Container>
  );
}

export default Update;