import React from "react";

const Homepage = () => {

    const handleCharacterList = () => {
        alert('NOT YET IMPLEMENTED');
    }

    const handleCharacterGenerator = () => {
        alert('NOT YET IMPLEMENTED');
    }

    return (
        <div className='flex flex-row justify-center items-center h-screen'>
            <button className='bg-white text-black p-5' onClick={handleCharacterList}>Character List</button>
            <br/><br/>
            <button className='bg-white text-black p-5' onClick={handleCharacterGenerator}>Character List</button>
        </div>
    );
};

export default Homepage;
