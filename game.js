const main_adventure_container = document.querySelector('#main-adventure');
const adventure_prompt_container = document.querySelector('#adventure-text');
const manual_input_element = document.querySelector('#manual-action');
const submit_manual_input_element = document.querySelector('#submit-action');
const adventure_actions_container = document.querySelector('#adventure-actions');

const inventory_container = document.querySelector('#inventory');

const character_stats_container = document.querySelector('#character-stats');
const character_overview_container = document.querySelector('#character-overview');
const character_attributes_container = document.querySelector('#character-attributes');
const character_points_list_element = document.querySelector('#character-points-list');

const jsonUrl = 'game-data.json';

let game_data;

fetch(jsonUrl)
    .then(resp => {
    // you'll need to supply the function that checks the status here
        if (http_response_ok(resp.status)) {
            return resp.json();
        } else {
            throw new Error(`Got back ${resp.status}`);
        }
        }).then(data => {
            // happy path
            game_data = data;
            console.log(data);
        }).catch(err => {
            // sad path
    });


console.log(game_data);

function new_game() {
    
}

function gameplay_loop() {
    
}