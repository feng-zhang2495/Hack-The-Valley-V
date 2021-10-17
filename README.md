## Inspiration
We were inspired to create Blood Society because of the recent Canadian blood demand this summer. The Canadian Blood Services called for **23,000** additional blood donors across Canada to fulfill the rising demand as COVID 19 Restrictions eased [Blood.ca](https://www.blood.ca/en/about-us/media/newsroom/canadas-blood-supply-needs-boost-summer-following-surge-demand#:~:text=Canada's%20blood%20supply%20needs%20a%20boost%20this%20summer%20following%20a%20surge%20in%20demand&text=JULY%206%2C%202021%20(OTTAWA),as%20COVID%2D19%20restrictions%20ease.) . We believed that educating more people about the importance of blood donations and emailing potential donors about the current demands of blood (Blood Society) would help to relieve this increasing demand of blood. 

## What it does
Blood Society answers very frequently asked questions about the blood donation process, redirects its users to official blood donation websites/locations, and also sends out a monthly free subscription newsletter via Gmail that informs people about the current situation with blood supply.

## How we built it
We built this app by using a react front-end and express.js-back end. The react front end sends a POST request about Email and Name credentials to the backend, and the backend will email a confirmation letter to the address and send back a successful response to React. To store the email addresses and other credentials needed, we connected the backend to a MySql Database which stores the information for the long term.  

## Challenges we ran into
There were many challenges that we ran into while creating Blood Society. It was our first time working with React as a front-end framework, and we had a lot of trouble extracting multiple pieces of data from forms and a drop down list. Another challenge we ran into was 

## Accomplishments that we're proud of
It was our first time creating an app with React as our front end.
We were able to successfully send out emails using just Node.js backend.
We were able to create working and attractive webpages using mainly just React and CSS. 
We built a mostly functioning website.

## What we learned
We learned the fundamentals of working with React 
We learned how to resolve conflicts in Git
We learned how the React frame-work runs/works


## What's next for Blood Society
Working with the database to send scheduled emails out to users every month.
Get data on the overall national supply of blood to determine when the country is in need of donors.
Improve the main index page to provide more information in a cleaner way (making UI more readable).
Provide statistics and stories on the website to help further educate and convince people to make a donation.
