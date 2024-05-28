import { createContext, useState } from "react";

export const LightContext = createContext({});

const LightProvider = ({children}) => {
    const [light, setLight] = useState(true);

    const changeLightState = (light) => {
        setLight(light);
        console.log(light)
    }

    return (
        <LightContext.Provider value={{ light, changeLightState}}>
            {children}
        </LightContext.Provider>
    )
};

export default LightProvider;