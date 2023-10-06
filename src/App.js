import Header from './components/Header';
import GlobalStyle from './components/elements/GlobalStyles.elements';
import Main from './components/Main';
import Form from './components/Form';
import NotesContainer from './components/NotesContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Header />
        <Main>
          <Form />
          <NotesContainer />
        </Main>
      </div>
    </>
  );
}

export default App;
