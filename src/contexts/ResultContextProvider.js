import React, { createContext, useContext, useState } from 'React';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const getResults = async (type) => {
		setIsLoading(true);

		const response = await fetch(`${baseUrl}${type}`, {
			method: 'GET',
			headers: {
				'X-User-Agent': 'desktop',
				'X-Proxy-Location': 'EU',
				'X-RapidAPI-Key':
					'fe3912f782msh7eb8efc31b369b0p163bbcjsnf7d6ab1a5157',
				'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
			},
		});
		const data = await response.json();

		setResults(data);
		setIsLoading(false);
	};
	return (
		<ResultContext.Provider
			value={{
				getResults,
				results,
				searchTerm,
				setSearchTerm,
				isLoading,
			}}>
			{children}
		</ResultContext.Provider>
	);
};

export const useResutContext = () => useContext(ResultContext);
