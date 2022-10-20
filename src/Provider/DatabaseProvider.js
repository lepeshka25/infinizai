import React from "react";

export const getDataBase = React.createContext({})

export const DataBaseProvider = ({children}) => {

	React.useEffect(() => {

	}, [])

	const value = React.useMemo(() => {
		return {
			'sdfsdfsd': 'sdfsdf'
		}
	}, [])
	return <getDataBase.Provider value={value}>{children}</getDataBase.Provider>
};