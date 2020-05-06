Feature: Game calls upon tellTurn and tellTurn runs

   Whenever a new Game is created; Game should call upon the function tellTurn()
   and the player should pass through tellTurn as parameter, and if player is not an integer
   with the value of 1 or 2; then an error should be thrown. tellTurn should also grab on DOM-element
   with css-class message and change its content to the either red or yellow's turn depending on 
   which value player has. We want this feature because knowing whose turn it is would clear things 
   up a whole lot.

   Scenario: tellTurn is called upon with a value below 1
   Given that tellTurn has been called upon
   And player has the value zero
   Then tellTurn should throw error "player must be 1 or 2"
