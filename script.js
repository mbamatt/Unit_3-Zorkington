/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'Zorkington: The Quest for Denver',
    desc: 'A thriling quest in the Kindgom of Denver',
    author: 'Matthew Martinez',
    cohort: 'SBPT-2022',
    startingRoomDescription: 'You find yourself in a dimly lit room',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'look', 'pickup', 'go', 'use',
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}
class Item {
    constructor(name, description, location) {
        this.name = name;
        this.description = description;
        this.location = location;
    }

    interact() {

        return `You look at ${this.name}, ${this.description}`;
    }
}

class Room {
    constructor(description, exits) {
        this.description = description;
        this.exits = exits;
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
}

let livingRoom = new Room("You're in the living room. There's a couch and a TV.", {north: "kitchen"});
let kitchen = new Room("It's the kitchen. Smells like cookies!", {south: "LivingRoom"});

let remote = new Item("Remote" , "Used for changing channels on the TV.", "livingRoom");

//Initializing some rooms and items 
let currentRoom = livingRoom;

function displayRoom(room) {
    return room.description;
}

function startGame() {
    return displayRoom(currentRoom);
}

function handleInput(playerInput) {
    let response = "";
    if(gameDetails.playerCommands.includes(playerInput)) {
        response = "Doing something with " + playerInput;
    } else {
        response = "I don't know how to " + playerInput;
    }
    return response;
}

class Player {
    constructor() {
        this.inventory = [];
    }

    pickUp(item) {
        this.inventory.push(item);
        currentRoom.items = currentRoom.items.filter(i => i !== item);
        return `${item.name} has been picked up!`;
    }
}

let player = new Player();

function move(direction) {
    if (currentRoom.exits[direction]) {
        currentRoom = Room[newRoomName];
        return displayRoom(currentRoom);
    } else {
        return `${direction} room cannot be accessed from here.`;
    }
}
Player.prototype.dropItem = function(itemName) {
    let itemIndex = this.inventory.findIndex(i => i.name === itemName);

    if (itemIndex > -1) {
        let item = this.inventory.splice(itemIndex, 1)[0];
        currentRoom.addItem(item);
        return `${itemName} has been dropped in ${currentRoom.description}.`;
    } else {
        return `You don't have a ${itemName} to drop.`;
    }
}
// Your code here

export const domDisplay = (playerInput) => {
    if (gameDetails.playerCommands.includes(playerinput)) {
        if (playerInput === "view") {
            return displayRoom(currentRoom);
      } else if (playerInput.StartsWith("pickup")) {

      }
    } else{
        return "I don't understand that command.";
    }
    /* git 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
