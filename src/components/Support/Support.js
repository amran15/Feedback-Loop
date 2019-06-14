import React, { Component } from 'react';
 
class Support extends Component {
    handleClick = () => {
        this.props.history.push('/comments')
        }
    render() {
        return (
             <main>
                <div className="Feeling Feedback">
                    <h1>How well are you being supported?</h1>
                    <span>Support?
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
export default Support;