import './App.css';
import { MyClassComponent } from './study/func-class-component/MyClassComponent';
import { MyFuncComponent } from './study/func-class-component/MyFuncComponent';


function App() {
  return (
    <div>
      <p>Func Component:</p>
        <MyFuncComponent bgColor={"red"}/>
      <hr />
      <p>Class Component:</p>
        <MyClassComponent bgColor={"blue"}/>
    </div>
  );
}

export default App;
