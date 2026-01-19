import { Text, TouchableOpacity, View } from 'react-native';
import { Trash2 } from 'lucide-react-native';
import { styles } from '../../styles';

export const MealCard = ({ id, name, calories, onDelete, macroNutrients }) => {
	return (
		<View style={styles.mealCard}>
			<View style={styles.mealMainContent}>
				<Text style={styles.mealName}>{name}</Text>
				<View style={styles.mealInfo}>
					<Text style={styles.mealCalories}>{calories} kcal </Text>
					<TouchableOpacity onPress={() => onDelete(id)}>
						<Trash2 size={20} color="#ff6b6b" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.macroNutrients}>
				<Text>P: {macroNutrients.protein}g </Text>
				<Text>C: {macroNutrients.carbs}g </Text>
				<Text>F: {macroNutrients.fats}g </Text>
			</View>
		</View>
	);
};
