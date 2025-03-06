import { Box, Typography } from '@mui/joy'
import React from 'react'
import { profilepicture } from '../../../assets'
import { useSelector } from 'react-redux'

const AdminStudentPage = () => {
  const user = useSelector((state:any) => state.auth.user.user)
  const fname = user.fname
  const lname = user.lname
  const email = user.email
console.log('fname',user.fname)


  return (
   <>

<Box sx={{width:'280px', height:'120px', backgroundColor:'primary.400' , borderRadius:5, padding:1, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
<img  alt='logo' src={profilepicture } width={60} height={80} style={{borderRadius:4}}/>

<Box>
<Typography level='h4' sx={{color:'white', fontSize:'16px'}}>Elisha Christopher Messo</Typography>
<Typography sx={{color:'white', fontSize:'14px'}}>Kitunda Sec. School</Typography>
<Typography sx={{color:'white', fontSize:'12px'}}>{fname}</Typography>
<Typography sx={{color:'white', fontSize:'12px'}}> {lname} </Typography>
<Typography sx={{color:'white', fontSize:'12px'}}> {email}</Typography>
<Typography sx={{color:'white', fontSize:'10px'}}>Mathematics | Physics</Typography>
</Box>

</Box>

  </>
  )
}

export default AdminStudentPage
