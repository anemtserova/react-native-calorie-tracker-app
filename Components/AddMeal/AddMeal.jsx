import { Modal, Text, TextInput, View, Keyboard } from 'react-native';
import { CustomButton } from '../Common/CustomButton';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import { styles } from '../../styles';

export const AddMeal = ({ onClose, onAdd, visible }) => {
	const [foodName, setFoodName] = useState('');
	const [calories, setCalories] = useState(0);
	const [macroNutrients, setMacroNutrients] = useState({
		protein: 0,
		carbs: 0,
		fats: 0,
	});

	const handleAddMeal = () => {
		const newMeal = {
			name: foodName,
			calories: calories,
			id: uuid.v4(),
			macroNutrients,
		};
		onAdd(newMeal);
		setFoodName('');
		setCalories(0);
		setMacroNutrients({ protein: 0, carbs: 0, fats: 0 });
		onClose();
		Keyboard.dismiss();
	};

	return (
		<Modal
			animationType="slide"
			onRequestClose={onClose}
			transparent
			visible={visible}>
			<View style={styles.overlay}>
				<View style={styles.modalContainer}>
					<Text style={styles.header}>Add Meal</Text>
					<Text>Food Name</Text>
					<TextInput
						style={styles.input}
						placeholder="e.g. Chicken Salad"
						value={foodName}
						onChangeText={setFoodName}
					/>
					<Text>Calories</Text>
					<TextInput
						style={styles.input}
						placeholder="e.g. 250"
						value={calories.toString()}
						onChangeText={(text) => setCalories(Number(text))}
						keyboardType="numeric"
					/>
					<Text>Protein (g)</Text>
					<TextInput
						style={styles.input}
						placeholder="e.g. 30"
						value={macroNutrients.protein.toString()}
						onChangeText={(text) =>
							setMacroNutrients((prev) => ({
								...prev,
								protein: Number(text),
							}))
						}
						keyboardType="numeric"
					/>
					<Text>Carbs (g)</Text>
					<TextInput
						style={styles.input}
						placeholder="e.g. 20"
						value={macroNutrients.carbs.toString()}
						onChangeText={(text) =>
							setMacroNutrients((prev) => ({
								...prev,
								carbs: Number(text),
							}))
						}
						keyboardType="numeric"
					/>
					<Text>Fats (g)</Text>
					<TextInput
						style={styles.input}
						placeholder="e.g. 10"
						value={macroNutrients.fats.toString()}
						onChangeText={(text) =>
							setMacroNutrients((prev) => ({
								...prev,
								fats: Number(text),
							}))
						}
						keyboardType="numeric"
					/>
					<View style={styles.buttonSection}>
						<CustomButton title="Add" onPress={handleAddMeal} type="primary" />
						<CustomButton title="Cancel" onPress={onClose} type="secondary" />
					</View>
				</View>
			</View>
		</Modal>
	);
};
