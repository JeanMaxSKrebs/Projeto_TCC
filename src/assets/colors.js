export const COLORS = {
    primary: '#FFF34D',
    secundary: '#444444',
    background: '#FFFFF9',
    primaryDark: '#EBC334',

    buttonDisabled: '#666666',
    gray: 'gray',
    black: 'black',
    white: 'white',
    red: 'red,'
};

function usarCor(cor) {
    switch (cor) {
        case 'primary':
            return '#FFF34D';
            break;
        case 'secundary':
            return '#444444';
            break;
        case 'background':
            return '#FFFFF9';
            break;
        case 'primaryDark':
            return '#EBC334';
            break;
        case 'buttonDisabled':
            return '#666666';
            break;
        case 'gray':
            return 'gray';
            break;
        case 'white':
            return 'white';
            break;
        case 'red':
            return 'red';
            break;
        default:
            break;
    }

}