import React from "react";

export const getDataBase = React.createContext({})

export const DataBaseProvider = ({children}) => {
	const [data , setData] = React.useState(null)
	const [update , setUpdate] = React.useState(false)

	React.useEffect(() => {
		fetch('https://testalmaz-b24d1-default-rtdb.firebaseio.com/.json')
			.then(res => res.json())
			.then(res => {
				let data = Object.values(res?.imageData).filter(item => item !== 'key')
				return {...res , imageData: data}
			})
			.then(data => setData(data))
	}, [update])

	const value = React.useMemo(() => {
		return {
			data,
			setUpdate
		}
	}, [data , setUpdate])
	return <getDataBase.Provider value={value}>{children}</getDataBase.Provider>
};