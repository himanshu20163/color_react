import React from "react";
const myStyle = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  boxShadow:"0px 0px 2px 3px #CCCCCC",
  width:"170px",
  margin:"20px",
};
function Cards(props) {//component
    return(
    <div class="cads" style={myStyle} >
     <h4 height="100px" width="100px" style={{backgroundColor:props.backgroundColor,width:"100%",height:"155px",marginTop:"-2px"}}></h4>
     <h2>{props.head}</h2>
     <p style={{color:props.color}}>{props.name}</p>
    </div>

    );
}
export default Cards;