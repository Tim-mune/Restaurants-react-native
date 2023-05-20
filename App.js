import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import SingleItem from "./src/screens/SingleItem";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Item: SingleItem,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "My restaurants app",
    },
  }
);
export default createAppContainer(navigator);
