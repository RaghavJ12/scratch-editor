import React, { useState } from 'react';
import { drag } from '../utils/dragDrop';
import getBlockColor from '../utils/getBlockColor';
import Icon from './Icon';
import { getIcon } from '../utils/getIcon';
import CommandBlock from './CommandBlock';
import PropTypes from 'prop-types';
import { NumericInput } from 'react-typed-inputs';

const SidebarBlock = ({ title, data }) => {
    const [val, setVal] = useState([10,10,10,10,10,10]);
    console.log("col",title,getBlockColor(
        title
    ));
    return (
        <>
            <div className="font-semibold"> {title} </div>

            {data.map((_d, i) => {
                return (
                    <div
                        draggable
                        onDragStart={drag}
                        id={title + i}
                        key={title + i}
                        className={`${val[i]} flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-lg w-full text-base justify-center`}
                    >
                        <CommandBlock text={getIcon(_d, 0)} icon={_d?.icon ? "true" : "false"} />
                        {getIcon(_d, 1) && (
                            <Icon
                                name={getIcon(_d, 1)}
                                size={15}
                                className="text-green-600 mx-2 my-1"
                            />
                        )}
                        {_d.val ?
                        <NumericInput value={val[i]} onValueChange={(value) => {
                            let valCopy = [...val];
                            valCopy[i] = value;
                            setVal(valCopy);
                        }} className="w-6 rounded text-black mx-3" />
                        : null}
                        <CommandBlock text={getIcon(_d, 2)} />
                    </div>
                )
            })}
        </>
    );
};

SidebarBlock.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

export default SidebarBlock;
