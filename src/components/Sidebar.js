import React from 'react';
import commandList from '../static/commandList';
import SidebarBlock from './SidebarBlock';
import { allowDrop, deleteDiv } from '../utils/dragDrop';

export default function Sidebar() {
    return (
        <div
            onDrop={deleteDiv}
            onDragOver={allowDrop}
            className="w-68 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 m-2"
        >
            <div className="font-bold mb-16">Commands </div>
            {Object.keys(commandList).map((blockName) => (
                <SidebarBlock
                    key={blockName}
                    title={blockName}
                    data={commandList[blockName]}
                />
            ))}
        </div>
    );
}
