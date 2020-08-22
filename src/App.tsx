import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import UsersList from './components/UsersList';
import initialState from './context/initialState';
import StateProvider from './context/StateProvider';
import Landing from './layouts/Landing';

function App() {
  const [filterValue, setFilterValue] = useState('');

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
  }

  return (
    <StateProvider initialState={initialState}>
      <Landing>
        <>
          <SearchBox
            placeholder="Search for Users..."
            handleChange={handleSearch}
          />
          <UsersList filterValue={filterValue} />
        </>
      </Landing>
    </StateProvider>
  );
}

export default App;
