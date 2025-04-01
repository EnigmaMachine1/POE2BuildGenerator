import React from "react";

const Homepage = () => {

    const handleCharacterList = () => {
        alert('NOT YET IMPLEMENTED LIST');
    }

    const handleCharacterGenerator = () => {
        alert('NOT YET IMPLEMENTED GENERATOR');
    }

    return (
        <div className='flex flex-column justify-center items-center h-screen text-center flex-wrap'>
            <div className='w-20'>
                <button className='bg-white text-black p-5 m-5' onClick={handleCharacterList}>Character List</button>
                <button className='bg-white text-black p-5 m-5' onClick={handleCharacterGenerator}>Character Generator</button>
            </div>
        </div>
    );
};

export default Homepage;
