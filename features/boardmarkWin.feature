Feature: Mark who won the game
  When a player wins, show it on screen
  

  Scenario: marks a win for a player
    Given that a player won a game
    And the method markWin corresponds to the 4 elements given on board
    And each div element should have win class.