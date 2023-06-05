import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Adventures from './Adventures';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>AEM CMS Headless Demonstration using Javascript framework react.</h1>
      <p>
        <strong>
          This is a react appicaion used to demonstrate the capabilities of
          Javacript on using Adobe Express Manager(AEM) CMS. Here, we are
          buidling a basic application to describe various picnic locations.
        </strong>
      </p>
      <Adventures />
    </QueryClientProvider>
  );
}

export default App;
