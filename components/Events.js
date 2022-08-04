import { Accordion} from "react-bootstrap"
import Statistics from "./Statistics";


const Events = ({events}) => {
    return ( 
        <div>
					{events.map(event => (
						<Accordion key={event.id}>
							<Accordion.Item eventKey="0">
								<Accordion.Header>{event.clock} - ({event.away_points} - {event.home_points}) {event.description}</Accordion.Header>
								<Accordion.Body>
									<div>Event Type: {event.event_type}</div>
									<div>Time: {event.clock}</div>
									<div>Score: {event.away_points} - {event.home_points}</div>
										<Statistics statistics={event.statistics} location={event.location}></Statistics>
								</Accordion.Body>
								</Accordion.Item>
						</Accordion>
					))}
        </div>
     );
}

export default Events;