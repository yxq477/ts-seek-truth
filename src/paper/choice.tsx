import React from 'react';

function Choice(props:any) {
  return (
    <div 
    className={'primary-text choice-item ' + (props.choosedAnswer === props.value && 'choosed')}
    onClick={()=> props.click(props.value)}> 
     <input type="checkbox" name="" id=""/>选项{props.value}：
     <br/>
     {props.label}
    </div>
  );
}

export default Choice;