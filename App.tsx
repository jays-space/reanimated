import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { PROJECTS, ProjectsType } from "./src/data/projectsList";
import { ReanimatedBasics } from "./src/screens/ReanimatedBasics";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name={PROJECTS[0].route} component={ReanimatedBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  const navigation = useNavigation();
  const _renderItem: ListRenderItem<ProjectsType> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.route, { item })}
        style={{
          paddingHorizontal: 24,
          paddingVertical: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          paddingHorizontal: 24,
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        Learning Animations with Reanimated
      </Text>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item) => item.id}
        data={PROJECTS}
        renderItem={_renderItem}
      />
      <StatusBar style="light" translucent={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
