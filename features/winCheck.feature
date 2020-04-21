Feature: Win or no Win
  Check the board if anyone wins or no one wins

  Scenario: one of the two players has won the game
    Given that the two players have already played
    When one of the two players has won the game
    Then a method should return an object
    And this object should set the value of the winner to a value of 1 or 2
    And a combo should be also be set which is an inner array of 4 arrays
    And every array has a position on the board in the form (rowNumber, colNumber)

  Scenario: the game has become draw
    Given that the two players have already played
    When no player has won the game
    Then a method should set return an object
    And this object should set the value of the winner to a value of "draw"
    And this draw should be of type string

  Scenario: the game has become with no win or draw
    Given that the two players have already played
    When no player has won the game or they got draw
    Then a method should be set to a value false.

