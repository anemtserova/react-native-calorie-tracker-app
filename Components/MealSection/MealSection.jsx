import { View, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { styles } from '../../App';

export const MealSection = ({ onAddMeal }) => {
	return (
		<View style={styles.mealSection}>
			<Text style={styles.sectionTitle}>Meals</Text>
			<TouchableOpacity hitSlop={20} onPress={onAddMeal}>
				<Plus size={24} color="#d1c7c7" />
			</TouchableOpacity>
		</View>
	);
};
