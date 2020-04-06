import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import { icon, Icon } from "native-base";
import coffeeshops from "../Components/CoffeeList/data";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigation() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "rgb(20,90,100)" },
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Screen
        name="Login"
        component={Login}
        options={{ title: "Log ya floof" }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ title: "Sign ya floof" }}
      />
      <Screen
        name="CoffeeList"
        component={CoffeeList}
        options={({ navigation }) => ({
          title: "Coffee List",
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ),
        })}
      />
      <Screen
        name="CoffeeDetail"
        component={CoffeeDetail}
        options={({ navigation }) => ({
          title: "Coffee List",
          headerRight: () => (
            <Icon
              name="md-cart"
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ),
        })}
        options={({ route, navigation }) => {
          const { coffeeshop } = route.params;
          return {
            title: coffeeshop.name,
            headerRight: () => (
              <Icon
                name="md-cart"
                onPress={() => navigation.navigate("CoffeeCart")}
              />
            ),
          };
        }}
      />
      <Screen name="CoffeeCart" component={CoffeeCart} />
    </Navigator>
  );
}
