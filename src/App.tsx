import Layout from './components/layout/Layout';
import { Chat } from './pages/Chat';

function App() {
  return (
    <div className="bg-cyan-200">
      <Layout>
        <Chat />
      </Layout>
    </div>
  );
}

export default App;
