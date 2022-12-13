const ModalReducer = (state, action) => {
    switch (action.type) {
        case 'safelock':
            return {
                ...state,
                safeLock: !state.safeLock
            }
        case 'autosave':
            return {
                ...state,
                autoSave: !state.autoSave
            }

        case 'questions':
            return {
                ...state,
                questions: !state.questions
            }

        case 'redeem':
            return {
                ...state,
                redeem: !state.redeem
            }
        default:
            return state
    }
}

export default ModalReducer