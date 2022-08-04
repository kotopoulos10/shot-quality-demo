import { gameData } from '../data/game'
import { shotQualityData } from '../data/shotQualityData'
import Periods from '../components/Periods'


export const getStaticProps = async () => {
    return {
        props: {
            game: gameData
        }
    }
}

const Game = ({game}) => { 
    return (            
    <div>
        <div>
            {game.away.market} {game.away.name} vs. {game.home.market} {game.home.name}
        </div>
        <Periods periods={game.periods}/>
    </div>
     );
}
 
export default Game;