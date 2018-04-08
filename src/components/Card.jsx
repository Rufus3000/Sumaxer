/*import React from 'react'
import { connect } from 'react-redux'
import { cardFlip } from '../actions'

const CardComp = ({data, onClick, flip}) => (
    <div className={flip ? "card turn":"card"}>
                <figure className="rub">
                    <span>x</span>
                </figure>
                <figure className="lic">
                    <span>{data}</span>
        </figure>
    </div>
)

const mapStateToProps = (state) => ({
    data: state.data,
    flip: state.flip
})

const mapDispatchToProps = {
    onClick: cardFlip
}

const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardComp)

export default CardContainer*/