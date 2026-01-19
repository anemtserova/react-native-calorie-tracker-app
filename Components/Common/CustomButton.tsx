import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles';

export const CustomButton = ({ title, onPress, type, style = {} }) => {
	return (
		<>
			<TouchableOpacity hitSlop={20} style={{ width: '50%' }} onPress={onPress}>
				<Text style={[styles.customButton, styles[type], style]}>{title}</Text>
			</TouchableOpacity>
		</>
	);
};
