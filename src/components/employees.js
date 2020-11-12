import React from 'react';

import {alphabet} from '../utils';

const Employees = ({data, checkedHandler}) => {

    const createSections = () => {
        return(
            <div className='employees__sections'>
                {
                    alphabet.map((letter, letterIndex) => {
                        const letterSection = data.filter(item => item.lastName[0] === letter);
                        return(
                            <div className='employees__section' key={letterIndex}>
                                <div className='employees__letter'>
                                    {letter}
                                </div>
                                <div className='employees__items'>
                                    {letterSection.length !== 0 ?
                                        letterSection.map(item => {
                                            return(
                                                <div className='employees__item' key={item.id}>
                                                    {item.lastName} {item.firstName}
                                                    <input
                                                        type="checkbox"
                                                        checked={item.checked ? true : false}
                                                        onClick={() => checkedHandler(item)}
                                                    ></input>
                                                </div>
                                            )
                                        }) :
                                        <div className='employees__item employees__item_empty'>-</div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return(
        <div className='employees'>
            <div className='employees__header'>
                Employees
            </div>
            {createSections()}
        </div>
    );
}

export default Employees;