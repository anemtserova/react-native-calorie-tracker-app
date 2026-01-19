import * as Progress from 'react-native-progress';
import { View, Text } from 'react-native';
import { styles } from '../../styles';

export const MacronutrientGraphs = ({ proteins, carbs, fats }) => {
	return (
		<View>
			<Text
				style={[
					styles.sectionTitle,
					{ textAlign: 'center', marginBottom: 20 },
				]}>
				Macronutrients
			</Text>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					width: '100%',
					marginBottom: 10,
				}}>
				<View style={{ alignItems: 'center' }}>
					<Progress.Circle
						size={80}
						progress={proteins / 150}
						showsText
						formatText={() => `${proteins}g`}
						color="#4caf50"
					/>
					<Text style={{ marginTop: 5 }}>Proteins</Text>
					<Text style={{ marginTop: 1, color: '#045007' }}>150g goal </Text>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Progress.Circle
						size={80}
						progress={carbs / 300}
						showsText
						formatText={() => `${carbs}g`}
						color="#2196f3"
					/>
					<Text style={{ marginTop: 5 }}>Carbs</Text>
					<Text style={{ marginTop: 1, color: '#045007' }}>300g goal </Text>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Progress.Circle
						size={80}
						progress={fats / 100}
						showsText
						formatText={() => `${fats}g`}
						color="#ff9800"
					/>
					<Text style={{ marginTop: 5 }}>Fats</Text>
					<Text style={{ marginTop: 1, color: '#045007' }}>100g goal </Text>
				</View>
			</View>
		</View>
	);
};
