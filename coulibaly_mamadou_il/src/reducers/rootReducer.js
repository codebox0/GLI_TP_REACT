import { combineReducers } from 'redux';

/*
 State:

 {
    visibilityFilter: 'all',
    costs: [
        {
            id: 1,
            paidBy: 1,
            title: 'Une activité',
            amount: 300
        }, ...
    ],
    users: [
        {
            id: 1,
            name: 'Erwan'
        }, ...
    ]
 }
 */

function users(state = [], action) {
    switch(action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ];
        default:
            return state;
    }
}

function costs(state = [], action) {
    switch(action.type) {
        case 'ADD_COSTS':
            return [
                ...state,
                {
                    id: action.cost.id,
                    title: action.cost.title,
                    amount: action.cost.amount,
                    paidBy: action.cost.paidBy 
                }
            ];
        default:
            return state;
    }
}

function visibilityFilter(state = 'all', action) {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    users,
    costs,
    visibilityFilter
});

export default rootReducer;
