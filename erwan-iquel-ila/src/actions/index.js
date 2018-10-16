let id = 0;

export function filterCosts(userName = 'all') {
    return {
        type: 'FILTER_COSTS',
        userName
    };
}

export const loadCosts = filterCosts();

export function addCost(cost) {
    return {
        type: 'ADD_COST',
        id: id++,
        cost
    };
}
