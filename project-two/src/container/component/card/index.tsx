import { Box, Stack, TextField, } from "@mui/material"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import { useDispatch } from "react-redux";
import { createUser, deleteUser, updateUser, weatherApi } from "../../redux/actions/weatherforecast";
const WeatherDemo= ()=>{
  const dispatch = useDispatch<any>()
  const getWeatherData = () =>{
    dispatch(weatherApi('delhi',(res:any)=>{
      console.log('res',res);
      
    }))
  }
  const updateUserData = () =>{
    const updateUserBody ={
      id:1,
      name:'samsungxx',
      price:100000

    }
    dispatch(updateUser(updateUserBody,(res:any)=>{
      console.log("res",res);
      
    }))
  }
  const deleteUserData = () =>{
    const deleteBody = {
      id:1
    }
    dispatch(deleteUser(deleteBody,(res:any)=>{
      console.log('res',res);
      
    }))
  }
  const createUserData = () =>{
    const createUserBody = {
      id:23233 ,
   name:'shubh',
   description:'dfdfgf',
   price:32323




 
  }

 dispatch(createUser(createUserBody,(res:any)=>{
  console.log('createUSer',res);
  
 }))
  }
    return(
        <>
        <Stack sx={{ height:'100vh' ,border:1}}>

        <Card sx={{ minWidth: 275 ,display:'flex',border:'red',flexDirection:'row'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Weather forecast
        </Typography>
 
  
      </CardContent>
      <CardActions>
        <Stack direction='row' columnGap='5px'>
        <TextField size="small"/>
        <Button size="small" variant="contained"
        onClick={deleteUserData}>Search</Button>
        </Stack>
    
      </CardActions>
    </Card>
    <Card sx={{ minWidth: 275 ,display:'flex',flexDirection:'row'}}>
      <CardContent>
        <Stack direction="row" sx={{minWidth: 275  ,flexDirection:'row',justifyContent:'space-between',alignitems:'center'}}>
        <Stack>
        <Typography>
    location
  </Typography>
  <Typography>
    Monday
  </Typography>
  <Typography>
    26 C
  </Typography>
        </Stack>
<Stack>
    <CloudIcon/>
</Stack>
        </Stack>
      
  

      </CardContent>
      {/* <CardActions>
        <Button size="small">Search</Button>
      </CardActions> */}
    </Card>
            </Stack>
  
        </>
    )
}
export default WeatherDemo