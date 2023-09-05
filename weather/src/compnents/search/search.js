import {AsyncPaginate} from "react-select-async-paginate";
import {useState} from "react";
import {geoAPiOptions, geourl} from "../../api";

const Search = ({onsearchChange}) => {
//    will use a statehook
    const [search, setsearch] = useState(null);
    const handleOnChange = (searchData) => {
        setsearch(searchData);
        onsearchChange(searchData);
    }
    
    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${geourl}/cities?minPopulation=1000000&namePrefix${inputValue}`, geoAPiOptions);
            const result = await response.text();
            result.then(options => {
                return {
                    option: options.data.map(city => {
                        return {
                            value:`${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countrcode}`,
                        }
                    })
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <AsyncPaginate
            placeholder='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search

