// function City (props) {
//     return (
//         <>
//         <h1>Capital: {props.cityData.capitol}</h1>
//         <p>Country: {props.cityData.country}</p>
//         <p>Population: {props.cityData.population}</p>
//         <p>Language: {props.cityData.language}</p>
//         </>
//     )
// }

// export default City;


function City (props) {
    // Destructuring
    const {capitol, country, population, language} = props.cityData
    return (
        <>
        <h1>Capital: {capitol}</h1>
        <p>Country: {country}</p>
        <p>Population: {population}</p>
        <p>Language: {language}</p>
        </>
    )
}

export default City;