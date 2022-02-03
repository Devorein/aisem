function comparePrecedence(topOperatorSymbol: string, operatorSymbol: string) {
	const parenthesisSymbols = new Set('()');
	if (parenthesisSymbols.has(topOperatorSymbol)) {
		return false;
	}
	const precedenceRecord: Record<string, [number, 'r' | 'l']> = {
		'*': [3, 'l'],
		'/': [3, 'l'],
		'+': [2, 'l'],
		'-': [2, 'l']
	};

	const [topOperatorPrecedence] = precedenceRecord[topOperatorSymbol];
	const [operatorPrecedence, operatorAssociativity] = precedenceRecord[operatorSymbol];

	if (operatorAssociativity === 'l') {
		return operatorPrecedence <= topOperatorPrecedence;
	} else {
		return operatorPrecedence < topOperatorPrecedence;
	}
}

export function convertInfixToPostfix(infixString: string) {
	const operationsStack: string[] = [];
	let postfixString = '';
	const nonLiteralSymbols = new Set('()*+/-');
	const parenthesisSymbols = new Set('()');

	for (let index = 0; index < infixString.length; index += 1) {
		const symbol = infixString[index];
		// If its a literal
		if (!nonLiteralSymbols.has(symbol)) {
			postfixString += symbol;
		} else if (symbol === '(') {
			operationsStack.push(symbol);
		} else if (symbol === ')') {
      // Pop from stack until we reach "("
			while (operationsStack.length > 0 && operationsStack[operationsStack.length - 1] !== '(') {
				postfixString += operationsStack.pop();
			}
			// Pop "(" from stack
			operationsStack.pop();
		} else if (operationsStack.length <= 0) {
			operationsStack.push(symbol);
		} else {
			while (operationsStack.length !== 0) {
				const topOperatorSymbol = operationsStack[operationsStack.length - 1];
				const shouldAddToPostfixString = comparePrecedence(topOperatorSymbol, symbol);
				if (shouldAddToPostfixString) {
					postfixString += operationsStack.pop();
				} else {
					break;
				}
			}
			operationsStack.push(symbol);
		}
	}

	while (operationsStack.length !== 0) {
		// If the last element of the stack contains parenthesis, there is mismatch of parenthesis
		if (parenthesisSymbols.has(operationsStack[operationsStack.length - 1])) {
			return postfixString;
		}
		postfixString += operationsStack.pop();
	}
	return postfixString;
}
