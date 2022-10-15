import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import List from './components/List';
import { EditorContext } from './context';
import './scss/main.scss';

function App() {

  const [edit, setEdit] = useState(null);

  return (
    <EditorContext.Provider value={{ edit, setEdit }}>
      <>
        <Editor/>
        <List/>
      </>
    </EditorContext.Provider>
  );
}

export default App;
