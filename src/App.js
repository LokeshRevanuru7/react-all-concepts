import React from 'react';
import ComponentA1 from './Components/ComponentA1';
import Componentb1 from './Components/Componentb1';
import ErrorBoundary from './Components/ErrorBoundary';


const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <ComponentA1 />
        <Componentb1 />
      </ErrorBoundary>
    </div>
  )
}

export default App
