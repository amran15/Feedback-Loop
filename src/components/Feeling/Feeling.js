import React, { Component } from 'react';
 
class Feeling extends Component {
    handleClick = () => {
        this.props.history.push('/understanding')
        }

handleSubmit(event){
    event.preventDefault();
}
    render() {
        return (
            <main>
                <div className="Feeling Feedback">
                    <h1>How are you feeling today?</h1>
                    <span>Feeling ?
                        <div>
                        <input type="number"/>
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

export default Feeling;