Feature: The Game class
 As a system owner I expect the
 methods in the game class to follow
 the API so that the program works as intended


 Scenario: The right methods should be called when constructing a new Game
 When we create a new instance of Game
 Then the constructor should call the method addEventListener
 And the constructor should call the method start