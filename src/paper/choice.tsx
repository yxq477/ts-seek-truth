import React from 'react';

function Choice(props:any) {
  return (
    <div className="primary-text choice-item" onClick={()=> props.click()}> 
     <input type="checkbox" name="" id=""/>选项A：
     <br/>
     123567890
    </div>
  );
}

export default Choice;