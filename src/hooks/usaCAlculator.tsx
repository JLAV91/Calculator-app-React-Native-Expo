import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'X',
    divide = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(() => {
        //TODO: Calcular subResultado
        setFormula(number);
    }, [number]);

    const clean = () => {
        setFormula('0');
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }
        setNumber('-' + number);
    }

    const deleteLast = () => {
        if (number.length > 1) {
            if (number.length == 2 && number.startsWith('-')) {
                return setNumber('0');
            }
            return setNumber(number.slice(0, -1))
        }
        setNumber('0')
    }

    const setLastNumber = () => {
        //Todo: calculate result

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }
        setPrevNumber(number);
        setNumber('0');
    }

    const divideOperator = () => {
        setLastNumber();
        lastOperation.current = Operator.divide
    }
    const multiplyOperator = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply
    }
    const subtractOperator = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract
    }
    const addOperator = () => {
        setLastNumber();
        lastOperation.current = Operator.add
    }

    const buildNumber = (numberString: string) => {

        //Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString == '.') return;

        if (number.startsWith('0') || number.startsWith('-1')) {
            if (numberString == '.') {
                return setNumber(number + numberString);
            }
            // Evaluar si es otro cero y no hay punto
            if (numberString == '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
            //Evaluar si es diferente de cero, no hay punto y es el primer numero
            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString);
            }
            //Evitar 0000000.00
            if (numberString == '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString);
    }



    return {
        //Props
        formula,
        number,
        prevNumber,


        // Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperator,
        multiplyOperator,
        subtractOperator,
        addOperator
    }

}