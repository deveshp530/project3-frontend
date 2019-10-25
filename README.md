# project3-frontend

# Technologies Used
React, React-Router-dom was used to pass information down to different components (home, and showpage). Home component allows users to search different bars by their location. The page then renders 25 bars within the area.

# Approach Taken
We knew what each page should look like, based on the pictures in the planning directory in the back-end repository. So we based everything off of that

# Features
Application has full CRUD on comments, and can create a user to show their comments on various bars they search

# Installation instructions
Clone this repo, and change directories. When in the current folder, should run npm install to have the dependencies on your machine. When installed run `npm start` in the same directory. Or, just click on the heroku link above to see the page!

# Unsolved problems
In the beginning we were struggling to pass information down to the showpage, but with some help we got it figured outWhenever you create a new comment, or want to delete a comment, you have to refresh the page in order to see that the comment was updated/deleted. But when you refresh the page, you get a `TypeError: cannot read name of undefined`. Im guessing this error is that the state of the bar is not saved when you refresh the page.
