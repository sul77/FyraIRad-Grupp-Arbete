Feature: The game runs 
The game starts running when it is started

  Scenario: The game constructor should call the methods in the correct order when constructing a new Game
    When we create a new instance of Game
    Then the method addEventListener should be called first
    And the method start should be called second