import React from 'react';
import { useSelector } from 'react-redux';
import { allowDrop, drop } from '../utils/dragDrop';
import TabList from './TabList';

export default function MidArea() {
    const tabs = useSelector((state) => state.tabs);
    const currentTab = useSelector((state) => state.currentTab);

    return (
        <div className="flex-1 h-full">
            <TabList />
            {tabs.map((tab) => (
                <div
                    key={tab + 'div'}
                    onDrop={drop}
                    onDragOver={allowDrop}
                    className={`flex-1 h-full overflow-auto ${tab === currentTab ? 'block px-12' : 'hidden'
                        }`}
                />
            ))}
        </div>
    );
}
