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

    const alturas = [
        {
          value: 'Not Priorized',
          label: 'Not Priorized',
        },
        {
          value: 'Blocker',
          label: 'Blocker',
        },
        {
          value: 'Critical',
          label: 'Critical',
        },
        {
          value: 'Major',
          label: 'Major',
        },
        {
            value: 'Minor',
            label: 'Minor',
          },
          {
            value: 'Trivial',
            label: 'Trivial',
          },
      ];

      const [alturaDropdown, setalturaDropdown] = React.useState('');

      const handleChangeAltura = (event) => {
        setalturaDropdown(event.target.value);
      };
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
                        <TextField 
                            id="select" 
                            label="Severity" 
                            variant="outlined" 
                            margin="normal" 
                            fullWidth 
                            select 
                            value={alturaDropdown}
                            onChange={handleChangeAltura} 
                            >
                            {alturas.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                  ))}
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