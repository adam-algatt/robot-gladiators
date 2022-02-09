var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "fight" || promptFight === "FIGHT") {
      window.alert(playerName + " has chosen to fight!");
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      //enemy health check
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }

      //start enemy attack
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      //player health check
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
      //skip sequence
     } else if (promptFight === 'skip' || promptFight === 'SKIP') {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          //subtract skip penalty from player money
          playerMoney = playerMoney - 2;
        }
        //if no, ask question again by calling the fight function
        else {
          fight();
        }
      } else {
        window.alert("You need to pick a valid option. Try again!");
      }
    };

    //runs fight function to start game
    fight(); 












