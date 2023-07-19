import ColorComponent from './component3/ColorComponent';
import ColorContext from './context/ContextAPI';

function App() {
  return (
    <div>
      {/* provider 하위컴포넌트에 전달한 props값을 제공하는 역할 - value 속성에는
      consumer에서 제어하게 될 값이 들어간다. */}
      <ColorContext.Provider value={{ color: 'green' }}>
        <ColorComponent />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
