# project3-frontend

# Description
An application for users to find 'secret bars' in their area. The user can search by location, and will return 25 bars with the least amount of reviews to the most reviews

# Technologies Used
Application was built using the M.E.R.N stack from scratch. We used yelps API to search by location and category of 'bar' so only bars will show up. We can change the parameters of search so users can search for anything. Ff you have an interesting idea for someone to search, let us know!! Application has ful CRUD on comments, and can create different users. Due to time restraint, we were not able to offer authentication. So instead, we just made users create an account with their name and email.
# Approach Taken
We knew what each page should look like, based on the pictures in the planning directory in the [back-end repository](https://github.com/deveshp530/project3-team7). So we based everything off of that

# Features
Application has full CRUD on comments, and can create a user to show their comments on various bars they search

# Installation instructions
Clone this repo, and change directories. When in the current folder, should run npm install to have the dependencies on your machine. When installed run `npm start` in the same directory. Or, just click on the heroku link above to see the page!

# Unsolved problems
In the beginning we were struggling to pass information down to the showpage, but with some help we got it figured outWhenever you create a new comment, or want to delete a comment, you have to refresh the page in order to see that the comment was updated/deleted. But when you refresh the page, you get a `TypeError: cannot read name of undefined`. Im guessing this error is that the state of the bar is not saved when you refresh the page.

# Disclaimer
App has some bugs that need to be fixed, but still works as intended.
