import { Card, CardHeader, CardContent } from '@mui/material';
import '../Styles/ProjectGameClient.css';
import CarouselBugReport from '../components/CarouselBugReport';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DropzoneAreaBug from 'src/components/DropzoneAreaBug';
import TextField from '@material-ui/core/TextField';

export default function ProjectGame() {
    const [value, setValue] = React.useState(2);
    return(
        <div>
            <p id="titlec">BR#000008</p>
            <p id="subTitlec">BlackJack not working as expected</p>

            <div id="pageContainerc">

                <div id="cardsc">
                    <Card style={styles.card}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Card>
                </div>  

                <div id="dropZone">
                    <DropzoneAreaBug></DropzoneAreaBug>
                </div>  
                      
            </div>
            
        <div id="starsc">
            <p style={{fontSize:'15px', marginLeft:'5px'}}>Rate the bug report</p>
            <Typography component="legend"></Typography>
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            />
            {/* <Icon icon="noto:star" width="20" height="20"/>
            <Icon icon="noto:star" width="20" height="20"/>
            <Icon icon="noto:star" width="20" height="20"/>
            <Icon icon="noto:star" width="20" height="20"/> */}
        </div>
        <div id="botonesc">
            <Button 
            color="success"
            variant="contained"
            >Approve</Button>
         <Button 
            color="error"
            variant="contained"
            >Decline</Button>       
         <Button 
            color="warning"
            variant="contained"
            >Download</Button>                                           
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