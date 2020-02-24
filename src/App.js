import React from 'react';
import './App.css';
import LabInfo from "./LabInfo";
import Foot from "./Foot";

class App extends React.Component {
    BA3175ReservedBy = {
        monday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        tuesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        wednesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        thursday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        friday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        }
    };
    BA3185ReservedBy = {
        monday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        tuesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        wednesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        thursday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        friday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        }
    };
    BA3195ReservedBy = {
        monday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        tuesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        wednesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        thursday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        friday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        }
    };
    BA2200ReservedBy = {
        monday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "CSC309H",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "CSC367H",
            '15:10 - 16:00': "CSC367H",
            '16:10 - 17:00': "CSC367H",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "CSC309H",
            '21:10 - 22:00': ""
        },
        tuesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "CSC207H",
            '14:10 - 15:00': "CSC207H",
            '15:10 - 16:00': "",
            '16:10 - 17:00': "",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "JSC370H",
            '19:10 - 20:00': "JSC370H",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        wednesday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "",
            '11:10 - 12:00': "",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "",
            '14:10 - 15:00': "COG403H",
            '15:10 - 16:00': "COG403H",
            '16:10 - 17:00': "COG403H",
            '17:10 - 18:00': "",
            '18:10 - 19:00': "CSC148H",
            '19:10 - 20:00': "CSC148H",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        },
        thursday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "CSC148H",
            '10:10 - 11:00': "CSC148H",
            '11:10 - 12:00': "CSC148H",
            '12:10 - 13:00': "CSC148H",
            '13:10 - 14:00': "CSC148H",
            '14:10 - 15:00': "CSC148H",
            '15:10 - 16:00': "CSC148H",
            '16:10 - 17:00': "CSC148H",
            '17:10 - 18:00': "CSC148H",
            '18:10 - 19:00': "CSC148H",
            '19:10 - 20:00': "CSC148H",
            '20:10 - 21:00': "CSC148H",
            '21:10 - 22:00': ""
        },
        friday: {
            '08:10 - 09:00': "",
            '09:10 - 10:00': "",
            '10:10 - 11:00': "CSC148H",
            '11:10 - 12:00': "CSC148H",
            '12:10 - 13:00': "",
            '13:10 - 14:00': "CSC209H",
            '14:10 - 15:00': "CSC148H",
            '15:10 - 16:00': "CSC148H",
            '16:10 - 17:00': "CSC148H",
            '17:10 - 18:00': "CSC148H",
            '18:10 - 19:00': "",
            '19:10 - 20:00': "",
            '20:10 - 21:00': "",
            '21:10 - 22:00': ""
        }
    };

    componentDidMount() {
        document.title = "Bahen Free Labs"
    }

    render() {
        return (
            <div className="App">
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