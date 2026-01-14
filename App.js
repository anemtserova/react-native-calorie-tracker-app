import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Plus, Home } from 'lucide-react-native';
import { MealSection } from './Components/MealSection/MealSection';
import { AddMeal } from './Components/AddMeal/AddMeal';

import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Button,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	const [showAddMeal, setShowAddMeal] = React.useState(false);

	const addMealHandler = () => {
		setShowAddMeal(true);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<StatusBar style="auto" />
					{/*Header*/}
					<View style={styles.infoSection}>
						<Text style={styles.headerText}>Calorie Tracker</Text>
					</View>

					<View style={styles.infoSection}>
						<Text style={styles.sectionTitle}>Calorie Overview</Text>
					</View>
					{/*List of meals*/}
					<View style={styles.infoSection}>
						<MealSection onAddMeal={addMealHandler} />
						{showAddMeal && <AddMeal onClose={() => setShowAddMeal(false)} />}
					</View>
					{/*App Bar*/}
					<View style={styles.appBar}>
						<View style={styles.appBarIconSection}>
							<TouchableOpacity hitSlop={20}>
								<Home size={24} color="#d1c7c7" />
							</TouchableOpacity>
							<TouchableOpacity hitSlop={20}>
								<Plus size={24} color="#d1c7c7" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export const colors = {
	primary: '#f8f8f8',
	secondary: '#fff',
	accent: '#e2e2e2',
};

export const styles = StyleSheet.create({
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
	appBar: {
		width: '100%',
		height: 60,
		backgroundColor: colors.secondary,
		borderTopColor: colors.accent,
		borderTopWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	appBarIconSection: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '100%',
	},
	mealSection: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});
