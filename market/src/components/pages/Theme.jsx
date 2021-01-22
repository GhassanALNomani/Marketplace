import React, {useState} from 'react'

export const Theme = () => {

    //State
    const [darkTheme, setDarkTheme] = useState(false) //default set of styles "false"






    //funnctional
    const handleToggleTheme = () =>{
        setDarkTheme(prevTheme => !prevTheme)
    }




    //JSX
    return (
        <div className={darkTheme ? "dark-theme" : "light-theme"}>
            <buttom onClick={handleToggleTheme}>
                {darkTheme ? "Dark Mode" : "Light Mode"}
            </buttom>
        </div>
    )
}
