import {Grid,Avatar, Button, Paper, FormControlLabel, Checkbox, TextField} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import NumbersIcon from '@mui/icons-material/Numbers';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpIcon from '@mui/icons-material/Help';

function RegData(){
    const avatStyle={
        color: "black",
    }
    const gridStyle={
        padding:"50px",
        indent:"100px"
    }
    const paperStyle={
        padding:"20px"
    }
    return(
        
      <div className="RegData">
          <Paper Paper elevation={7}style={paperStyle}>
          <Grid align="left'">
          <ArrowBackIcon></ArrowBackIcon>
          </Grid>
          <Grid align= "center">
          <h1>Verification</h1>
          <Avatar style={avatStyle}><EmailIcon></EmailIcon></Avatar>
            <h>********</h>
            <Avatar style={avatStyle}><NumbersIcon></NumbersIcon></Avatar>
            <h>********</h>
            <div class="flex-container">
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>  
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>  
            <div><TextField label=""></TextField></div>
            <div><TextField label=""></TextField></div>
            </div>
            <FormControlLabel
            control={
            <Checkbox
            name="Checked"
            color="primary"
             />}
             label = "Show Number"
             />
            <Grid align="right" style={gridStyle}>
            <Button
            type="submit"
            color="inherit"
             variant="contained"
            >
               Next
             </Button>
             <p></p>
             <HelpIcon></HelpIcon>
             </Grid>
             
            </Grid>
            </Paper>
            </div>
            
            
            
)
}
export default RegData;