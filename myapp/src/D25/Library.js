import React from 'react';
import Book from './Book';
// import Hello from './D25/Hello'
function Library(){
    return <div> 
        <Book name="아버지" numOfPage = "1"></Book>
        <Book name="어머니" numOfPage = "2"></Book>
        <Book name="동생" numOfPage = "3"></Book>
    </div>
}

export default Library;