import React from 'react';
import * as d3 from 'd3';

const divStyle = {
    color: 'white'
};

class Map extends React.Component {
    componentDidMount() {
        let root = d3.select("#mapCanvas");

        let svg = root.append("svg")
            .attr("width", "100%")
            .attr("height", "100%");

        svg.append("circle")
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', '10px')
            .style('fill', 'red');
    }

    render() {
        return (
            <div style={divStyle} >
                <h2>Carte de Todani</h2>
                <main>
                    <div id="mapCanvas"></div>
                </main>
            </div>
        )
    }
}



export default Map;