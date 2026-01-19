import { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Plus, Home } from 'lucide-react-native';
import { MealSection } from './Components/MealSection/MealSection';
import { AddMeal } from './Components/AddMeal/AddMeal';
import { styles } from './styles';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
	const [showAddMeal, setShowAddMeal] = useState(false);
	const [meals, setMeals] = useState([]);

	const addMealHandler = () => {
		setShowAddMeal(true);
	};

	const handleAddMeal = (meal) => {
		// Handle adding the meal here
		setMeals((prevMeals) => [...prevMeals, meal]);
		setShowAddMeal(false);
	};

	const totalCalories = useMemo(() => {
		return meals.reduce((total, meal) => total + meal.calories, 0);
	}, [meals]);

	const handleDeleteMeal = (mealId) => {
		setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
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
					<ScrollView
						style={[
							styles.mealsContainer,
							meals.length === 0 && styles.mealsContainerEmpty,
						]}
						contentContainerStyle={styles.mealsContent}>
						<MealSection
							onAddMeal={addMealHandler}
							meals={meals}
							totalCalories={totalCalories}
							onDelete={handleDeleteMeal}
						/>
					</ScrollView>
					<AddMeal
						visible={showAddMeal}
						onClose={() => setShowAddMeal(false)}
						onAdd={handleAddMeal}
					/>
					{/*App Bar*/}
					<View style={styles.appBar}>
						<View style={styles.appBarIconSection}>
							<TouchableOpacity hitSlop={20}>
								<Home size={24} color="#d1c7c7" />
							</TouchableOpacity>
							<TouchableOpacity hitSlop={20} onPress={addMealHandler}>
								<Plus size={24} color="#d1c7c7" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
