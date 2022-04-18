import React from 'react';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';
import { deleteSprite, allowDrop } from './utils/dragDrop';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxmagt4lkkUBGhE-GCn8Ujp0ZmA95apvw",
  authDomain: "scratch-d8f70.firebaseapp.com",
  projectId: "scratch-d8f70",
  storageBucket: "scratch-d8f70.appspot.com",
  messagingSenderId: "440007046786",
  appId: "1:440007046786:web:f7364689bc8a0775ef669b"
};

const app = initializeApp(firebaseConfig);

export default function App() {
    return (
        <div
            onDrop={deleteSprite}
            onDragOver={allowDrop}
            className="bg-purple-100 pt-6 font-sans"
        >
            <div className="h-screen overflow-hidden flex flex-row  ">
                <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
                    <Sidebar /> <MidArea />
                </div>
                <div className="w-1/2 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
                    <PreviewArea />
                </div>
            </div>
        </div>
    );
}
