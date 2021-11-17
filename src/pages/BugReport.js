import '../Styles/BugReport.css';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DropzoneAreaBug from 'src/components/DropzoneAreaBug';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'

export default function ProjectGame() {
    const [value, setValue] = React.useState(2);
    return(
        <div id="">
            <p id="titlec">Report a Bug</p>
            <p id="subTitlec">Describe the bug that you found.</p>

            <div id="pageContainerd">

                <div id="cardo">
                        <TextField id="" label="Title" variant="outlined" margin="normal" fullWidth/>
                        <br></br>
                        <TextField id="" label="Description" variant="outlined" margin="normal" multiline rows="8" fullWidth/>                        
                        <br></br>
                        <TextField id="select" label="Severity" variant="outlined" margin="normal" fullWidth select>
                            <MenuItem value="10">Low</MenuItem>
                            <MenuItem value="20">Medium</MenuItem>
                            <MenuItem value="20">High</MenuItem>
                        </TextField>
                        <br></br>
                        <TextField id="" label="Steps to reproduce" variant="outlined" margin="normal" multiline rows="8" fullWidth/>
                </div>  

                <div id="dropFile">
                    <DropzoneAreaBug
                    dropzoneText="Bokita"></DropzoneAreaBug>
                    <div id="botonesc">
                        <Button 
                        color="secondary"
                        variant="contained"
                        size="large"
                        fullWidth
                        >Submit</Button>                                     
                    </div>
                </div>  
                      
            </div>

        </div>
    )
}


const styles = {
    card:{
        width:'90%',
        //marginLeft:'10%'
    },
    card2:{
        width:'15%',
        marginLeft:'5%'
    }

}