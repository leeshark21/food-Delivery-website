import { createContext, useState, useEffect } from "react"

import {food_list} from '../../assets/frontend_assets/assets'

export const StoreContext = createContext(null)

const storeContextProvide = (props)  => {
    const [cardItems, SetCardItems] = useState({});

    const addToCart = (itemId) => {
        if (!cardItems[itemId]) {
            SetCardItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            SetCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId)=>{
        SetCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(() => {
        console.log(cardItems);

    }, [cardItems])
    const contextValue = 
    {
        food_list,
        cardItems,
        SetCardItems,
        addToCart,
        removeFromCart


    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default storeContextProvide;