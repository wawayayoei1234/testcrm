import { Box } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { themedata } from 'data/themedata';
import { frontdata } from 'data/frontdata'; 
import { useSession } from "next-auth/react";

function index() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "Guest";
  const date = new Date(); 
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formattedDate = `${monthNames[date.getMonth()]}, ${date.getDate()}`;
function truncateAfterWhitespace(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  const truncatedStr = str.substr(0, maxLength);
  const lastSpaceIndex = truncatedStr.lastIndexOf('');
  if (lastSpaceIndex === -1) return truncatedStr; 
  return truncatedStr.substr(0, lastSpaceIndex);
}
const truncatedName = truncateAfterWhitespace(userName, 10);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',}}>
      <Box sx={{ justifyContent:'space-between', display: 'flex', alignItems: 'baseline',flexDirection:'column'}}>
        <Box sx={{color: `${themedata[0].ten}`, fontSize: 17, fontFamily: frontdata[0].font, fontWeight: '350'}}> {formattedDate}</Box>
        <Box sx={{color: `${themedata[0].ten}`, fontSize: 24, fontFamily: frontdata[0].font, fontWeight: '800', display: 'flex', alignItems: 'center',flexDirection:'column'}}>
          <br></br>
          {truncatedName}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
        <Box sx={{ position: 'relative', width: 90, height: 90, background: `${themedata[0].twelve}`, borderRadius: 9999 }}>
        <img src={session?.user?.image} alt="User profile" style={{ borderRadius: '50%' }} />
          <Box sx={{ position: 'absolute', top: 70, left: 70, width: 20, height: 20, background: `${themedata[0].six}`, borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EditIcon fontSize='10' color='three'/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default index
