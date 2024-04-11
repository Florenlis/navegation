import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import {Slide3} from '../screens/Slide3';
import {Slide4} from '../screens/Slide4';

type MenuStackParam = {
  Slide3: undefined
  Slide4: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide3">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack(){
    const Stack = createStackNavigator<MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Slide3" component={Slide3}/>
            <Stack.Screen name="Slide4" component={Slide4}/>
        </Stack.Navigator>

    );
}