import produce from 'immer'

const CategoryState = {
    CategoryList: []
}

const CategoryReducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'Show-Categorys':
                state.CategoryList = action.payload
                break;
        
            default:
                break;
        }
    }, CategoryState
)

export default CategoryReducer