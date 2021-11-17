import { Card, CardHeader, CardContent } from '@mui/material';
import '../Styles/ProjectGameClient.css';
import CarouselBugReport from '../components/CarouselBugReport';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ProjectFeedbackGamer() {
    const [value, setValue] = React.useState(2);
    return(
        <div>
            <p id="titlec">Gamer's Feedback</p>
            <p id="subTitlec">Juan Cruz Lafranconi</p>

            <div id="pageContainerc">
                <div id="cardsc">
                    <Card style={styles.card}>
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
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                            <div>
                            <Rating id="star"
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                            <div>
                            <Rating id="star"
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                            <div>
                            <Rating id="star"
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                            <div>
                            <Rating id="star"
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                            <div>
                            <Rating id="star"
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                            <div>
                            <Rating id="star"
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                            <div>
                            <Rating id="star"
                                        name="read-only"
                                        value={5}
                                        readOnly
                                    />
                            </div>
                    </div>
                    </div>

    
                    </Card>
                    <br></br>
                    <Card style={styles.card}>
                        <CardHeader    
                        title="Liked the most"/>
                        <CardContent>I really enjoyed the UI and UX. It was really 
                            intuitive and simple to use while being creative and 
                            in line with the theme of the game
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card style={styles.card}>
                        <CardHeader    
                        title="Liked the least"/>
                        <CardContent>Some of my favourite casino games weren't in the game
                            maybe you could expand to more games. Also the prizes weren't interesting enough
                        </CardContent>
                    </Card>
                    <br></br>
                    <Card style={styles.card}>
                        <CardHeader    
                        title="Changes"/>
                        <CardContent>It would be interesting if the game had an underlaying
                            story mode in which you could perfect your skills againt the Npc.
                        </CardContent>
                    </Card>
                    <br></br>
                </div> 
                      
            </div>
        <div id="botonesc">

            <Button id="botonprevius"
            color="inherit"
            variant="contained"
            >Previus</Button>

            <Button id="boton"
            color="primary"
            variant="contained"
            >Approve</Button>
         <Button id="boton"
            color="error"
            variant="contained"
            >Decline</Button>       
         <Button id="boton"
            color="secondary"
            variant="contained"
            > Download </Button> 

        <Button id="botonext"
            color="inherit"
            variant="contained"
            >Next</Button>                                         
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