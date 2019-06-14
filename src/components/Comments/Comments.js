import React, { Component } from 'react';
 
class Comments extends Component {
    handleClick = () => {
        this.props.history.push('/')
        }


    render() {
        return (
         <main>
         <div className="Feeling Feedback">
             <h1>Any comments you want to leave?</h1>
             <span>Comments
                 <div>
                 <input type="type"/>
                 <button onClick={this.handleClick}>NEXT</button>
                 </div>
             </span>
         </div>
         <div>
         <h2>Review Your Feeling</h2>
         <form>
             <div>
             Feelings: 
             <input type="number"/>
             </div>
             <div>
             Understanding:
             <input type="number"/>
             </div>
             <div>
             Support: 
             <input type="number"/>
             </div>
             <div>
             Comment:
             <input type="type"/>
             </div>
         </form>
          </div>
     </main>
        );
    }
}

export default Comments;