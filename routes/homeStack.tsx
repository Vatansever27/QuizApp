import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from "../screens/Home";
import QuestionsPage from "../screens/Questions";

const screen = {
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
    },
  },
  QuestionsPage: {
    screen: QuestionsPage,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screen, {
  navigationOptions: {
    backgroundColor: "#eeee",
    color: "white",
    headerShown: false,
  },
});

export default createAppContainer(HomeStack);
