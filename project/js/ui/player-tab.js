var nameField = document.getElementById('player-name-input');
var levelField = document.getElementById('player-level-input');

function addNewPlayer() {
    if (nameField.value !== '' && teamField.value !=='') {
        p = new Player(nameField.value, levelField.value);
        tournament.addPlayer(p);
        nameField.value = "";
        levelField.value = "";
        refreshPlayerList();
        nameField.focus();
    }
    else {
        alert('Bitte alle Informationen ausfüllen');
    }
}

function refreshPlayerList() {
    playerList.textContent = '';
    for (let p of tournament.players) {
        var entry = document.createElement('tr');
        nameSpan = document.createElement('td');
        nameSpan.classList.add('playerName');
        nameSpan.appendChild(document.createTextNode(p.name));
        teamSpan = document.createElement('td');
        teamSpan.classList.add('playerTeam');
        gamesSpan = document.createElement('td');
        gamesSpan.classList.add('playerGames');
        gamesSpan.appendChild(document.createTextNode(p.gamesPlayed));
        teamSpan.appendChild(document.createTextNode(p.team));
        priorityBtn = document.createElement('button');
        priorityIcon = new Image (24,24);
        priorityIcon.src = root_dir + "/assets/arrow-up.svg";
        priorityBtn.appendChild(priorityIcon);
        priorityBtn.classList.add('btn-priority');
        deleteBtn = document.createElement('button');
        deleteIcon = new Image (24, 24);
        deleteIcon.src = root_dir + "/assets/trash-bin.svg";
        deleteBtn.appendChild(deleteIcon);
        // deleteBtn.appendChild(document.createTextNode('Entfernen'));
        deleteBtn.classList.add('btn-delete');
        deleteBtn.onclick = function(){tournament.removePlayer(p.name);};
        entry.appendChild(nameSpan);
        entry.appendChild(teamSpan);
        entry.appendChild(gamesSpan);
        entry.appendChild(priorityBtn);
        entry.appendChild(deleteBtn);
        playerList.appendChild(entry);
    }
}