const bears = [
    {
        id: 'bear1',
        name: 'Carmen',
        imageUrl: 'https://images.unsplash.com/photo-1560742258-2dd24362e139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
    },
    {
        id: 'bear2',
        name: 'Achilles',
        imageUrl: 'https://images.unsplash.com/photo-1561095835-0e487e13ba71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    }
];

const getBears = () => {
    return bears;
}

export default { getBears };