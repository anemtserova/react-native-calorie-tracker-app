import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CustomButton = ({ title, onPress, type, style = {} }) => {
	return (
		<>
			<TouchableOpacity
				style={[styles.customButton, styles[type], style]}
				hitSlop={20}>
				<Text>{title}</Text>
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	customButton: {
		width: '100%',
		textAlign: 'center',
		borderWidth: 1,
		borderRadius: 8,
		fontWeight: 'bold',
		paddingVertical: 12,
	},
	primarty: {
		backgroundColor: '#01080d',
	},
	secondary: {
		backgroundColor: '#f8f8f8',
	},
});
