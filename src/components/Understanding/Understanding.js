import React, { Component } from 'react';
 
class Understanding extends Component {
    handleClick = () => {
        this.props.history.push('/support')
        }
    render() {
        return (
            <main>
            <div className="Feeling Feedback">
                <h1>How well are you understanding the content?</h1>
                <span>Understanding?
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

export default Understanding;