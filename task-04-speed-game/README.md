# Speed Game

This React App was created as the 4th task for React.js as part of the Full Stack Web Development Program at [Business College Helsinki](https://en.bc.fi/qualifications/full-stack-web-developer-program/). You can see a [live demo here](https://laurielim-react-speed-game.netlify.app/).

## Technologies used

Built with:

- HTML
- JS
- CSS
- Reactjs
- Netlify

## Setup and usage

Inside a cloned directory/folder, run:

```bash
npm install
```

## Acknowledgment

Mentor: Margit Tennosaar

- GitHub @margittennosaar
- [LinkedIn](https://www.linkedin.com/in/margittennosaar/)

### Instructions

Your task is to create similar Speed Game by using React.js

1. Create new React app in reactjs_sandbox
2. Cleanyour app
3. Update App.js to have a class component
   - Add heading
   - A placeholder for score
   - Buttons for start and end game
4. Make overall CSSchanges
   - Add gradient background•Change font (use playful font)
   - Style also buttons
5. Create a new separated function component:Circle.js and connect it with App.js
   - Make circles using Circle.css
   - Show min 4 circles on application(use map())
6. Make circles clickableand update scoreby state•State -> score: 0
   - clickHandler -> setState-this.state.score +1
   - connect clickHandler with circles-> {props.clicks}and {this.clickHandler}
   - pass circle number to clickHandler-> use data passing to event handler (binding)
   - show updated score in score placeholder -> see step 3.
7. Finding random numberfor random circle highlight
   - You need a random number from 1-4 (or how many circles you have) ->https://www.w3schools.com/js/js_random.asp
   - Add state-> current: 0
   - Use Do While loop for finding a number which is 1-4 but not same as it was previously
   - Use setStatefor that number generated randomly-> setState-current: nextActive
8. Add timer for random numbers(use for example setTimeOut method)
   - Define speed and timer
   - add start handler
   - add end handler -> use clearTimeOut
9. Colourschanges(use inline styling and conditional rendering)
   - Add different colours for all circles-> check is circle default or active(the random number we created) and use active colouror inline style background colour
   - Add highlight colourfor active circle-> add class in CSSfor active state(for example default is ".circle" but in active phase it is ".circle .active")
10. Create GameOver.jsfunction componentand connect it with App.js
    - Create overlay
    - Createapopup box
    - Add Heading
    - Add Score
    - Add close button
    - StyleGameOver view
11. By using true/false state, hide GameOver componentuntil endHandler is triggered
    - State -> showGameOver: false
    - Add trigger-> endHandler setState-showGameOver:true
    - Wrap component in JavaScript code which checks is state true or false
12. Add right circle click check
    - If the randomly generated number and circle ID does not match, then endHandler will be triggered
13. Add roundsto end the game after fiverounds(if the player does not click fiverounds then the game will end)
    - State -> rounds: 0
    - setState –this.state.rounds + 1
    - Add round check -> if more than fivethen endHandler will be triggered
    - Add in clickHandler setState which will clear rounds if the user clickscircles.
14. Disable Start buttonduring the game
    - Use disabled attribute on button element which is checking is the state true or false
15. Disable circle clicksbefore game starts
    - Use inline styling
16. Add styling of your choice.
17. Add sounds to every circle click andanimage to for active circle.
18. Add screenshotfrom your application and add it to readme file.

Make GitHub commits.

This game is a great way to use your knowledge about function and class components, how to use props and states,and how to style your application.
