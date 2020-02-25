import React from 'react';
import './App.css';
import LabInfo from "./LabInfo";
import Foot from "./Foot";
import CurAvail from "./CurAvail";
import data from "./Data/data"

class App extends React.Component {
    BA2200ReservedBy = data.BA2200ReservedBy;
    BA3175ReservedBy = data.BA3175ReservedBy;
    BA3185ReservedBy = data.BA3185ReservedBy;
    BA3195ReservedBy = data.BA3195ReservedBy;
    render() {
        document.title = "Bahen Free Labs";
        return (
            <div>
                <CurAvail BA2200={this.BA2200ReservedBy}
                          BA3175={this.BA3175ReservedBy}
                          BA3185={this.BA3185ReservedBy}
                          BA3195={this.BA3195ReservedBy}/>
                <LabInfo room={"BA2200"} reserver={this.BA2200ReservedBy}/>
                <LabInfo room={"BA3175"} reserver={this.BA3175ReservedBy}/>
                <LabInfo room={"BA3185"} reserver={this.BA3185ReservedBy}/>
                <LabInfo room={"BA3195"} reserver={this.BA3195ReservedBy}/>
                <Foot/>
            </div>
        );
    }
}

export default App;
