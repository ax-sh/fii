import {
  type CallExpression,
  type ObjectLiteralExpression,
  type SourceFile,
  SyntaxKind,

} from 'ts-morph';

export function getViteDefineConfigCall(sourceFile: SourceFile): CallExpression {
  const callExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);

  return callExpressions.find((callExpression) => {
    const calledExpression = callExpression.getExpression();
    return calledExpression.getText() === 'defineConfig';
  });
}

export function addBasePropertyToDefineConfig(
  value: string,
  firstArgument: ObjectLiteralExpression
) {
  const baseProperty = {
    name: 'base',
    initializer: `"${value}"`
  };
  firstArgument.addPropertyAssignment(baseProperty);
  console.log(baseProperty);
}

export function getViteDefineConfigCallOptions<T = ObjectLiteralExpression>(
  sourceFile: SourceFile
) {
  const defineConfigCall = getViteDefineConfigCall(sourceFile);
  const [firstArgument] = defineConfigCall.getArguments();

  return firstArgument as T;
}
