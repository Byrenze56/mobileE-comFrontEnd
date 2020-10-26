// import axios from 'axios';

// export default axios.create({
//     baseURL: "https://api.yelp.com/v3/businesses",
//     headers: {
//         Authorization: 'Bearer
//     }
// });
// import { useEffect, useState } from 'react';
// import yelp from '../api/yelp';

// export default () => {
//     const [ results, setResults] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {searchApi("pizza")}, [])

//     const searchApi = async (searchTerm) => {
//         try{
//         const response = await yelp.get('/search', {
//             params:{
//                 limit: 50,
//                 term: searchTerm,
//                 location: 'sparta'
//             }
//         });
//         setResults(response.data.businesses);
//         } catch (err) {
//             setError('Something went wrong');
//           }
//     };
//     return [ searchApi, results, error ];
// }

//resultsShow ---------------------
// import { useEffect, useState } from 'react';
// import yelp from '../api/yelp';

// export default () => {
//     const [ results, setResults] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {searchApi("pizza")}, [])

//     const searchApi = async (searchTerm) => {
//         try{
//         const response = await yelp.get('/search', {
//             params:{
//                 limit: 50,
//                 term: searchTerm,
//                 location: 'sparta'
//             }
//         });
//         setResults(response.data.businesses);
//         } catch (err) {
//             setError('Something went wrong');
//           }
//     };
//     return [ searchApi, results, error ];
// }

//searchScreen------------------

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

// const SearchScreen = () => {
//     const [term, setTerm] = useState('')
//     const [ searchApi, results, error] = useResults();

//     const filterResultsByPrice = (price) => {
//         return results.filter(result => {
//             return result.price === price;
//         })
//     }

//     return(
//         <>
//             <SearchBar
//              term={term} 
//              onTermChange={setTerm}
//              onTermSubmit={() => searchApi(term)}
//             />
//            {error?<Text>{error}</Text>: null}
//             <ScrollView>
//             <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
//             <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
//             <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
//             </ScrollView>
//         </>
//     );

   
// }
// const styles = StyleSheet.create({

// })

// export default SearchScreen;

