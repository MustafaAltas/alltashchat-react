import { createContext, useEffect, useState } from "react";
import { CurrentUser } from "../cloud/Auth";
import useSound from 'use-sound';
import sendMessage from "../sound/message.mp3";
const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState({});
    const [play] = useSound(sendMessage);

    useEffect(() => {
        CurrentUser(setCurrentUser);
    },[currentUser])
    return(
        <AppContext.Provider value={{setCurrentUser,currentUser,play}}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext;