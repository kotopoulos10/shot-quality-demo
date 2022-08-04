import { Tabs, Tab } from "react-bootstrap";
import Events from "./Events";
import 'bootstrap/dist/css/bootstrap.css';

const Periods = ({periods}) => {    
    return ( 
        <Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className="mb-3">
            {periods.map(period => (
                <Tab key={period.number} eventKey={period.number} title={period.number}>
                    <Events events={period.events}/>
                </Tab>
            ))}
        </Tabs>
    );
}

export default Periods;