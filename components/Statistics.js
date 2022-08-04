const Statistics = ({statistics, location}) => {

    if (statistics && location) {
        return (
            <div>
                <div>Shot Type: {statistics[0].shot_type}</div>
                <div>Shot Distance: {statistics[0].shot_distance} feet</div>
                <div>Shot Area: {location.action_area}</div>
                <div>X: {location.coord_x}</div>   
                <div>Y: {location.coord_y}</div>
            </div>
        );
    }
}
 
export default Statistics;