let costId = 0;
let userId = 0;

export function setVisibilityFilter(filter = 'all') {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
}

export function addCost(cost) {
    return {
        type: 'ADD_COST',
        id: costId++,
        cost
    };
}

export function addUser(name) {
    return {
        type: 'ADD_USER',
        id: userId++;
        name
    };
}
