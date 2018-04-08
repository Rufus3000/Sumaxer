import React, { Component } from 'react'
import { connect } from 'react-redux'
import { flip } from '../actions'
import { bindActionCreators } from "redux";

class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const pole = [];
        const item = this.props.items.board;
        /*
        let strana = "rub";

        if (item.flip === true){
            strana = "lic";
        }
        else if (item.flip === false){
            strana = "rub"
        }*/
        console.log(item);
       for(let i = 0; i < item.length; i++){
           
            pole.push(<div className="karta-flip" onClick={() => this.props.onClick(item[i].id)}>
                <div className="karta">
                    <div className="lic">{item[i].value}</div>
                    <div className="rub"></div>
                </div>
            </div>)
        }

        return(<div>
            <div className="board">{pole}</div>
            <div><p>{this.props.items.moveCounter}</p></div>
        </div>)
    }
}

function mapStateToProps(state){
    return ({
        items: state.Game
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onClick: flip }, dispatch)
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(CardContainer);