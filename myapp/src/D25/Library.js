import React from 'react';
import Book from './Book';
// import Hello from './D25/Hello'
function Library(){
    return <div> 
        <Book name = "아버지" numOfPage = "127"></Book>
        <Book name = "어머니" numOfPage = "127"></Book>
        <Book name = "동생" numOfPage = "127"></Book>
    </div>
}

export default Library;