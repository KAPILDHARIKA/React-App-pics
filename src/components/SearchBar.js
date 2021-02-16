import React from 'react';


class SearchBar extends React.Component{
 state = { term : ''};
//arrow function automatically binds 'this'
//instead of assigning an object we are assigning a function

 onFormSubmit=(event)=>{
   event.preventDefault();
   //console.log(this.state.term);
   this.props.onSubmit(this.state.term);
 };

//onInputChange is a callback fucntion that's why no parenthesis
render(){
 return (
     <div className="ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
         <div className="field">
         <label>Image search</label> 
        <input type="text" value={this.state.term} onChange={(e)=>this.setState({ term: e.target.value})}></input>
         </div>
      </form>
    </div>
    );
}

}


export default SearchBar;