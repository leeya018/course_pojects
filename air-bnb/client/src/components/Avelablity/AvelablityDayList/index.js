import React, { Component } from 'react';
import moment from 'moment'
import './AvelablityDayList.css'

class AvelablityDayList extends Component {

    constructor(props) {
        super(props)
        this.status = 1
        this.renderDays = this.renderDays.bind(this)
        this.setMyDate = this.setMyDate.bind(this)
    }

    setMyDate(e) {
        let val = e.target.innerText
        if (e.target.style.background !== 'gray') {
            e.shiftKey ? this.props.handleUpdateDayRight(val) : this.props.handleUpdateDayLeft(val)
        }
    }

    taken(takenDate, day) {
        let { month, year } = this.props
        let currDate = `${year}-${month + 1}-${day}`
        if (moment(currDate).isBetween(takenDate.checkIn, takenDate.checkOut, 'day', [])) {
            return true
        }
        return false
    }
    
    getStyle(day) {
        let styleDay = { background: 'gray' }
        let { occupancy } = this.props
        if (day.dayNum) {
            for (let takenDate of occupancy) {
                console.log(takenDate)
                if (this.taken(takenDate, day.dayNum)) {
                    return styleDay
                }
            }
            return {}
        }
    }

    renderDays() {
        return this.props.listDays.map((day, index) => <div style={this.getStyle(day)} className="day" onClick={this.setMyDate} key={index}>{day.dayNum}</div>)
    }

    render() {
        return <div className="daysList">{this.renderDays()}</div>

    }

}


export default AvelablityDayList


