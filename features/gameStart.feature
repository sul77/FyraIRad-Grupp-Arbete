Feature: Game calls upon start and start runs

   Whenever a new Game is created; Game should call upon the function start() 
   and the start function should create a new instance of Board using this instance of Game to
   the Board's constructor, because we can't play Fyra-i-rad if the game never starts

   Scenario: Start is called upon
   Given that the function start is called upon
   Then start should create a new instance of the class Board