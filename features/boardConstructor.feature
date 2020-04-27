Feature: Creates a new board
  New board should be empty with all its positions set to 0,
  because having a board-grid with already filled positions
  would not make it fun to play

  Scenario: New game begins with an empty board
    When a new Board is created
    Then the game parameter from Game should an instance of Game
    And incase game is not an instance of Game; then error "game must be an instance of Game" should be thrown
    And all values in the matrix grid should be set to zero
    And currentPlayer should have the initial value 1
    And playInProgress should have the initial value false
    And method addEventListener() should be called upon 
    And method render() should be called upon afterwards
    And then the method tellTurn() with inargument currentPlayer from game should be called upon

  #here should scenarios for addEventListener and render to be listed down here
  #When we start with such scenarios, shall add them later then to fit with such features