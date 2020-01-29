# TestList

This component Renders TestListItem that is shown in the dashboard. This component is used Inside DashboardPage.jsx 

![Image of TestListItem](https://i.ibb.co/S5XjyT1/card-list-PNG.png)

## props passed into TestList by TestPage

1. tests

Its a json file that we're getting from the backend and it looks like this

![Image of TestListItem](https://i.ibb.co/8NHwfXb/tests-json-PNG.png)

what we are doing is, we're using map function to render TestListItem inside of TestList according to the number of tests that we're getting from the json via backend. 
