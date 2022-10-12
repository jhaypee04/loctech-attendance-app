import { createContext, useReducer } from 'react'

export const ClassnameContext = createContext()

export const classnameReducer = (state, action) => {
    switch(action.type){
        case 'SET_CLASSNAME':
            return { classname: action.payload }
        case 'REMOVE_CLASSNAME':
            return { classname: null }
        default:
            return state
    }
}

export const ClassnameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(classnameReducer, {
        classname: null
    })

    // useEffect(()=>{
    //     const classname = JSON.parse(localStorage.getItem('classname'))
    //     if(user){
    //         dispatch({type: 'LOGIN', payload: user})
    //     }
    // },[])

    console.log('ClassnameContext state: ', state)

    return (
        <ClassnameContext.Provider value={{...state, dispatch}}>
            {children}
        </ClassnameContext.Provider>
    )
}