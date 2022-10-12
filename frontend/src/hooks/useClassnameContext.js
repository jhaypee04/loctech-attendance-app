import { ClassnameContext } from '../context/ClassnameContext'
import { useContext } from 'react'

export const useClassnameContext = () => {
    const context = useContext(ClassnameContext)
    if(!context){
        throw Error('useClassnameContext must be used inside a ClassnameContextProvider')
    }
    return context
}