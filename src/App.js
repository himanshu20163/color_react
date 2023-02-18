import logo from './logo.svg';
import './App.css';
import Cards from './Component/Cards';
import Movie from './Component/Movies';

function App() {
  const myStyle = {display:"flex",justifyContent:" center",
  alignItems: "center",
  flexWrap:"wrap",
  };
  return (
    <div style={myStyle}>
      <Movie name="sikanar" />
      {/* <Cards name="himanshu"/> */}
    <Cards head="#FF6663" backgroundColor="#FF6663"  name="PINK" color="#FF6663"/>
    <Cards head="#333333" backgroundColor="#333333" name="GRAY" color="#333333"/>
    <Cards head="#000000" backgroundColor="#000000" name="BLACK" color="#000000"/>
    <Cards head="#38BB14" backgroundColor="#38BB14" name="GREEN" color="#38BB14"/>
    <Cards head="#C90B0B" backgroundColor="#C90B0B" name="RED" color="#C90B0B"/>
    <Cards head="#FF8000" backgroundColor="#FF8000" name="ORANGE" color="#FF8000"/>
    <Cards head="#FFF500" backgroundColor="#FFF500" name="YELLOW" color="#FFF500"/>
    <Cards head="#CCCCCC" backgroundColor="#CCCCCC" name="LIGHT GRAY" color="#CCCCCC"/>
    <Cards head="#7E41A2" backgroundColor="#7E41A2" name="PURPLE" color="#7E41A2"/>
    <Cards head="#C14911" backgroundColor="#C14911" name="BROWN" color="#C14911"/>
    <Cards head="#CCCCCC" backgroundColor="#C14911" name="himanshu" color="#C14911"/>
    </div>
  );
}

export default App;
