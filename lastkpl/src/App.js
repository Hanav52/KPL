import React from 'react';

function App() {
  const data = {id: 'heel', password: 'pw'};

  const test = axios.post('http://35.89.73.172:3000/user', data, {
    'Content-Type': 'application/json'
  })

  return (
    <div>
      hello
    </div>
  );
}

export default App;
