# TestListItem 

This component Renders the Test Card that is shown in the dashboard. This is used inside TestList Component to dynamically render the number of tests available 

![Image of TestListItem](https://i.ibb.co/tKXGR2Z/card.png)

## props passed into TestListItem by TestList(component)

1. assesmentName
2. assesmentType
3. imageUrl
4. testState

All these data are comming from the json file that we're getting from the backend. The api for this is called when the user logs in. Then the data flows from DashboardPage -> TestList -> TestListItem