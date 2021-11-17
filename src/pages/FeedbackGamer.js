import '../Styles/BugReport.css';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DropzoneAreaBug from 'src/components/DropzoneAreaBug';
import TextField from '@material-ui/core/TextField';
import { Card, CardHeader, CardContent } from '@mui/material';
import MenuItem from '@material-ui/core/MenuItem'

export default function ProjectGame() {
    const [value, setValue] = React.useState(2);
    return(
        <div id="">
            <p id="titlec">Gamer Feedback</p>
            <p id="subTitlec">BR#0023134</p>
            <div id="stars">
                <div>
                <Card id="cardd">
                    <CardHeader title="What dow you think about..." style={{ textAlign: 'center' }}/>
                    <div id="pageContainerc">
                        <div id="next">
                            <div id="starsfeed">
                                <CardContent id="textStar">Gameplay</CardContent>
                            </div>
                            <div id="starsfeed">
                                <CardContent id="textStar">Music</CardContent>
                            </div>
                            <div id="starsfeed">
                                <CardContent id="textStar">Graphics</CardContent>
                            </div>
                            <div id="starsfeed">
                                <CardContent id="textStar">Narrative</CardContent>
                            </div>
                            <div id="starsfeed">
                                <CardContent id="textStar">Animation</CardContent>
                            </div>
                            <div id="starsfeed">
                                <CardContent id="textStar">UI/UX</CardContent>
                            </div>
                            <div id="starsfeed">
                                <CardContent id="textStar">Tutorial</CardContent>
                            </div>
                            <div>
                                <CardContent id="textStar">Worldbuilding</CardContent>
                            </div>
                        </div>

                        <div id="down">
                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={5}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>

                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={3}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>

                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={1}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>

                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={2}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>

                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={5}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>
                            
                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={5}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>

                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={4}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>

                            <div>
                            <Rating id="star"
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                            </div>
                        </div>
                        </div>
                    </Card>
                </div>

                <div id="cardo">
                        <br></br>
                        <TextField id="" label="What did you like the most..." variant="outlined" margin="normal" multiline rows="6" fullWidth/>                        
                        <br></br>
                        <TextField id="" label="What did you like the least..." variant="outlined" margin="normal" multiline rows="6" fullWidth/>                        
                        <br></br>
                        <TextField id="" label="What would you change and why?" variant="outlined" margin="normal" multiline rows="6" fullWidth/>     
                             
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
    card2:{
        width:'15%',
        marginLeft:'5%'
    }

}