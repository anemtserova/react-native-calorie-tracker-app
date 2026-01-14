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
					<View style={styles.infoSection}>
						<Text style={styles.headerText}>Calorie Tracker</Text>
					</View>
					{/* <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}> */}
					{/*Overview*/}
					<View style={styles.infoSection}>
						<Text style={styles.sectionTitle}>Calorie Overview</Text>
					</View>
					{/*List of meals*/}
					<View style={styles.infoSection}>
						<Text style={styles.sectionTitle}>List of meals</Text>
					</View>
					{/*App Bar*/}
					<View style={styles.infoSection}>
						<Text style={styles.sectionTitle}>App Bar</Text>
					</View>
					{/* </ScrollView> */}
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const colors = {
	primary: '#f8f8f8',
	secondary: '#fff',
	accent: '#e2e2e2',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	infoSection: {
		flex: 0.1,
		width: '80%',
		backgroundColor: colors.secondary,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: colors.accent,
		borderRadius: 10,
		marginTop: 10,
		boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: '600',
		marginVertical: 10,
	},
});
