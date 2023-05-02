export interface IPropsInput {
    autoCapitalize?: 'none' | 'words' | 'characters' | 'sentences';
    textAlign?: 'center' | 'left' | 'right';
    placeholder?: string;
    value?: string;
    /* eslint-disable-next-line */
    onChangeText: (...event: any[]) => void;
    mask?: boolean;
    type?: | 'credit-card' | 'cpf' | 'cnpj' | 'zip-code' | 'only-numbers' | 'money' | 'cel-phone' | 'datetime' | 'custom';
    options?: {
        maskType?: 'BRL';
        withDDD?: boolean;
        dddMask?: '(99) ';
        mask?: '99.999-999' | '99/99/9999';
    };
    keyboardType?: 'numeric' | 'default';
    editable?: boolean;
    multiline?: boolean;
    secureTextEntry?: boolean;
    className?: string;
    defaultValue?: string;
    testID?: string;
}
