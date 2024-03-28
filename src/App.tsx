import HomeContainer from './containers/home-container';
import ReactQueryProvider from './providers/react-query-provider';
import StoreProvider from './providers/store-provider';

function App() {
  return (
    <ReactQueryProvider>
      <StoreProvider>
        <HomeContainer />
      </StoreProvider>
    </ReactQueryProvider>
  );
}

export default App;
