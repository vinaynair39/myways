#Loader

A custom Loader made using svgs and keyframes.
There is a state that I have maintained in Redux called loading
before making a api request I make this state as true and when the api req is completed, The loading state is set to false
The loader compnent can be used to render the loader in any page by checking the loading state and rendering the Loader component if loading state is true