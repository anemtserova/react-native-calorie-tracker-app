import { View, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { styles } from '../../styles';
import { MealCard } from '../MealCard/MealCard';

export const MealSection = ({ onAddMeal, onDelete, meals, totalCalories }) => {
	return (
		<View style={styles.mealSection}>
			<View style={styles.mealHeader}>
				<View style={styles.mealHeaderText}>
					<Text style={styles.sectionTitle}>Meals </Text>
					{totalCalories > 0 && (
						<Text>Total Calories: {totalCalories} kcal</Text>
					)}
				</View>
				<TouchableOpacity hitSlop={20} onPress={onAddMeal}>
					<Plus size={24} color="#d1c7c7" />
				</TouchableOpacity>
			</View>
			<View style={styles.mealList}>
				{meals.map((meal) => (
					<MealCard key={meal.id} {...meal} onDelete={onDelete} />
				))}
			</View>
		</View>
	);
};
