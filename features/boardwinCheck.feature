Feature: Check who won or if it was a draw
  After a game of Fyra-i-rad is complete; I want to know whether 
  player 1 or player 2 won and if neither one of the players won; 
  tell me that it was a draw, because knowing who won or if it was a
  draw would make it easier for the players to determine the outcome of a game

  Scenario: One of the two players has won the game
    Given that a board has been created
    When one of the players has won a game session
    Then winCheck method should return an object
    And the object should contain the property "winner" with the value set to the winner (1 or 2)
    And the object should contain an array of four arrays named "combo" where every inner array is a position on the board [rownumber, kolumnnummer]


  Scenario: Game ended in a draw
    When neither of the players has won
    Then the winCheck method should return an object
    And the object should contain the property "winner" with the value set to string "draw"
  

  Scenario: No winner no draw
    When neither of players has won
    And neither has it been a draw
    Then wincCheck method should return false