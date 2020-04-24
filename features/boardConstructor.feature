Feature: Creates a new board
  New board should be empty with all its positions set to 0

  Scenario: A new Game starts with an empty board
    Given that a new Game is created
    When game should be initiated of Game
    Then a board is created
    And the board should be empty as a beginning
    And board has positions set to a value of 0
    And currentPlayer should be set to a value of 0
    And playInProgress should be set to a value of false

  #here should scenarios for addEventListener and render to be listed down here
  #When we start with such scenarios, shall add them later then to fit with such features