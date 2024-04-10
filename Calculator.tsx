import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CalculatorButton = ({onPress, text, buttonStyle}) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const Calculator = () => {
  const [result, setResult] = useState('');

  const handlePress = value => {
    setResult(result + value);
  };

  const clearResult = () => {
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => clearResult()}
          text="AC"
          buttonStyle={styles.clearButton}
        />
        <CalculatorButton onPress={() => handlePress('/')} text="/" />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => handlePress('7')} text="7" />
        <CalculatorButton onPress={() => handlePress('8')} text="8" />
        <CalculatorButton onPress={() => handlePress('9')} text="9" />
        <CalculatorButton onPress={() => handlePress('*')} text="*" />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => handlePress('4')} text="4" />
        <CalculatorButton onPress={() => handlePress('5')} text="5" />
        <CalculatorButton onPress={() => handlePress('6')} text="6" />
        <CalculatorButton onPress={() => handlePress('-')} text="-" />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => handlePress('1')} text="1" />
        <CalculatorButton onPress={() => handlePress('2')} text="2" />
        <CalculatorButton onPress={() => handlePress('3')} text="3" />
        <CalculatorButton onPress={() => handlePress('+')} text="+" />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => handlePress('0')}
          text="0"
          buttonStyle={styles.zeroButton}
        />
        <CalculatorButton
          onPress={() => handlePress('.')}
          text="."
          buttonStyle={styles.button}
        />
        <CalculatorButton
          onPress={() => calculateResult()}
          text="="
          buttonStyle={styles.equalButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
  },
  result: {
    fontSize: 40,
    color: '#FFF',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 5,
    backgroundColor: '#383838',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  clearButton: {
    backgroundColor: '#FF5722',
  },
  zeroButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 5,
    backgroundColor: '#383838',
    borderRadius: 5,
  },
  equalButton: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 5,
    backgroundColor: '#FF5722',
    borderRadius: 5,
  },
});

export default Calculator;
