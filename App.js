import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<StatusBar style="auto" />
					{/*Header*/}
					{/* <ScrollView> */}
					<View>
						<Text>Calorie Tracker</Text>
					</View>
					{/*Overview*/}
					<View>
						<Text>Calorie Overview</Text>
					</View>
					{/*List of meals*/}
					<View>
						<Text>List of meals</Text>
					</View>
					{/*App Bar*/}
					<View>
						<Text>App Bar</Text>
					</View>
					{/* </ScrollView> */}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
