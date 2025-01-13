//Generate or adapt the fields tab on start up and each time the settings are changed

var fields_tab = document.getElementById("#fields-tab");

function generateOrUpdateFields() {
    //find the current number of fields and players per team
    let num_fields = 0;
    let num_players = 0;

    let fields = fields_tab.querySelectorAll("volleyball-field");
    if (fields != undefined && fields != null) {
        num_fields = fields.length;
        let players = fields[0].querySelectorAll(".team1 span");
        if (fields != undefined && fields != null) {
           num_players = players.length;
        }
    }
    //find the new number of fields and players per team
    let settings_fields = document.querySelector("#settings-tab #field-count-input").value;
    let settings_players = document.querySelector("#settings-tab #team-size-input").value;
    //if the old one is smaller, add the new ones
    if (settings_fields > num_fields) {

    }
    //otherwise remove the difference starting with the last one
    else {
        
    }
}