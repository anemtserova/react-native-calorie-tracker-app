import { Modal, Text, TextInput, StyleSheet, View } from 'react-native';

export const AddMeal = ({ onClose }) => {
	return (
		<Modal animationType="slide" onRequestClose={onClose} transparent>
			<View style={styles.overlay}>
				<Text style={styles.header}>Add Meal</Text>
				<View style={styles.modalContainer}>
					<Text>Food Name</Text>
					<TextInput style={styles.input} placeholder="e.g. Chicken Salad" />
					<Text>Calories</Text>
					<TextInput style={styles.input} placeholder="e.g. 250" />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '80%',
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		padding: 10,
		marginTop: 10,
		marginBottom: 20,
		width: '100%',
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
});
