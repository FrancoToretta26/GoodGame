import { Card, CardHeader, CardContent } from '@mui/material';
import '../Styles/ProjectGame.css';
import Button from '@mui/material/Button';
import ProjectGameClient from './ProjectGameClient';

export default function ProjectGame() {
    return(
        <div>
        <p id="title">Casino Royale</p>
        <p id="subTitle">Icore Interactive</p>
        <div id="cards">
            <Card style={styles.card}>
                <CardHeader  
                style={{ textAling: 'center' }}        
                title="Description"/>
                <CardContent>Casino Royale is a new mobile game where you walk through an open world and play 
                    games found in real life casino. Players are motivated to play in order to earn an in-game currency that allows the 
                    chance to earn various prizez such as characters and special scenes with tem. Monetization is done via in-game currency 
                    to spped up the game.

                </CardContent>
            </Card>
            <Card style={styles.card2}>
                <CardHeader   
                title="Sections"/>
                <CardContent>
                    <div id="listBox">
                        <img src="https://www.telediariodigital.net/wp-content/uploads/2021/01/CASINO.jpg" id="img"></img>
                        <p id="listText">Texas hold'Em</p>
                    </div>
                    <div id="listBox">
                        <img src="https://us.123rf.com/450wm/maystra/maystra1807/maystra180700643/104237644-rueda-de-la-ruleta-del-casino-americano-sobre-fondo-verde-oscuro-ilustraci%C3%B3n-vectorial.jpg?ver=6" id="img"></img>
                        <p id="listText">Roulette</p>
                    </div>
                    <div id="listBox">
                        <img src="https://www.juegossuramericanos2013.pe/images/uploads/cartas-blackjack.jpg" id="img"></img>
                        <p id="listText">BlackJack</p>
                    </div>
                    <div id="listBox">
                        <img src="https://mundogremial.com/wp-content/uploads/2021/04/slots-casino.jpg" id="img"></img>
                        <p id="listText">Slots</p>
                    </div>
                </CardContent>
            </Card>
            <Card style={styles.card2}>
                <CardHeader  
                title="Past Reports"/>
                <CardContent>
                    <div id="listBox2">
                        <Button 
                        color="inherit"
                        variant="contained"
                        href="CasinoRoyale/Report1">BR#000008</Button>
                    </div>
                    <div id="listBox2">
                        <Button 
                        color="inherit"
                        variant="contained">BR#000026</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div id="botones">
            <Button         
                variant="contained">Download Build
            </Button> 
            <Button   
                color="error"      
                variant="contained">Report a Bug
            </Button> 
        </div>
        </div>
    )
}

const styles = {
    card:{
        width:'40%',
        //marginLeft:'10%'
    },
    card2:{
        width:'15%',
        marginLeft:'5%'
    }

}