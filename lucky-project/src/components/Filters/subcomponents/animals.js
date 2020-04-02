import React from 'react';
import '../../../styles/ResultsFilters.scss';

export default function Animals(props) {

    const singleAnimal = [];

    for(let i = 0; i < props.animal.length; i ++){
        console.log(i)
    }

    return(
        <div>
            {singleAnimal}
        </div>
    )
}