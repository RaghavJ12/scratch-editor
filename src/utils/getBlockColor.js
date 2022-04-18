const getBlockColor = (blockName) => {
    switch (blockName) {
        case 'Events':
            return 'yellow';
        case 'Looks':
            return 'purple';
        case 'Motion':
            return 'blue';

        default:
            return 'red';
    }
};

export default getBlockColor;
