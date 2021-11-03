import { Card, CardHeader, CardContent } from '@mui/material';
import '../Styles/ProjectGameClient.css';
import CarouselBugReport from '../components/CarouselBugReport';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ProjectGame() {
    const [value, setValue] = React.useState(2);
    return(
        <div>
            <p id="titlec">BR#000008</p>
            <p id="subTitlec">BlackJack not working as expected</p>

            <div id="pageContainerc">

                <div id="cardsc">
                    <Card style={styles.card}>
                        <CardHeader    
                        title="Description"/>
                        <CardContent>When a user wins a match of blackjack and quit the game, the funds are not available in the user wallet
                        When a user wins a match of blackjack and quit the game, the funds are not available in the user wallet
                        When a user wins a match of blackjack and quit the game, the funds are not available in the user wallet 
                            to spped up the game.
                        </CardContent>
                    </Card>
                    <Card style={styles.card}>
                        <CardHeader    
                        title="Severity: Low"/>
                    </Card>
                    <Card style={styles.card}>
                        <CardHeader    
                        title="Steps to reproduce"/>
                        <CardContent><p>1- Start a normal BlackJack Game</p>
                        <p>2- Play until you win</p>
                        <p>3- Make a money checkout</p>
                        <p>4- Check your wallet, it'll have less funds than it should</p>
                        </CardContent>
                    </Card>
                </div>  

                <div>
                    <CarouselBugReport></CarouselBugReport>
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