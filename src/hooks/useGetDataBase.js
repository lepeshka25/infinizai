import React from 'react'
import {getDataBase} from "../Provider/DatabaseProvider";

export const useGetDataBase = () => {
	return React.useContext(getDataBase)
}