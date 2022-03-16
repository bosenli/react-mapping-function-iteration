import cities from '../Data'
import City from './City';
function Main () {
    return (
        <div>
            {
                cities.map((cityData, index) => {
                    // iterate through each city object
                    // taking each object out of the array and passing it down as props into City
                    //key is necessary or we get error, passing data down 
                    return <City cityData={cityData} key={index}/>
                })
            }

        </div>
    )
}

export default Main;

// everytime the City component renders we will send data
// down as props untial we stop iteraing 