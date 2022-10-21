import React from "react";

export const getDataBase = React.createContext({})

export const DataBaseProvider = ({children}) => {
	const [data , setData] = React.useState(null)

	React.useEffect(() => {
		fetch('https://testalmaz-b24d1-default-rtdb.firebaseio.com/imageData/.json')
			.then(res => res.json())
			.then(res => Object.values(res).filter(item => item !== 'key'))
			.then(data => setData(data))
	}, [])

	const value = React.useMemo(() => {
		return data
	}, [data])
	return <getDataBase.Provider value={value}>{children}</getDataBase.Provider>
};