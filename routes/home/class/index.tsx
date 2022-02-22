import { useLayoutEffect } from "react";
import { SafeAreaView, TouchableHighlight, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { ClassProps } from "..";
import { globalStyles, globalTheme } from "../../../components/styles/globalStyles";
import { ClassUI } from "./class";


export function ClassScreen({ navigation, route }: ClassProps) {

  const { data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: data.name, headerRight: () => <HeaderEditButton onPress={() => {
        navigation.navigate('CreateClass', { initialData: data, editMode: true });
      }} />
    })
  }, [navigation])

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <ClassUI data={data} />
    </SafeAreaView>
  );
}

function HeaderEditButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableHighlight style={globalStyles.circleButton} onPress={() => onPress()}>
      <View style={[globalStyles.circleButtonContent, { backgroundColor: globalTheme.darkGrey }]}>
        <Svg width={30} height={30} viewBox='0 0 24 24'>
          <Path fill='#000' d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </Svg>
      </View>
    </TouchableHighlight>
  );
}