import React, { Component } from 'react';
import moment from 'moment'
import AvelablityDayList from './AvelablityDayList'
import './Avelablity.css'

export default class Avelablity extends Component {
    constructor(props) {
        super(props)
        let today = new Date()
        this.dayNames = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.state = { checkIn: '', checkOut: '' }
        this.year = today.getFullYear()
        this.month = today.getMonth()
        this.day = today.getDay()
        this.fromDay = ''
        this.toDay = ''

        this.prevMonth = this.prevMonth.bind(this)
        this.nextMonth = this.nextMonth.bind(this)
        this.enterDaysHtml = this.enterDaysHtml.bind(this)
        this.getDaysArray = this.getDaysArray.bind(this)
        this.updateDayLeft = this.updateDayLeft.bind(this)
        this.updateDayRight = this.updateDayRight.bind(this)
    }

    getDaysArray() {
        let year = this.year
        let month = this.month
        let dayNames = this.dayNames
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            let dayObj = {
                dayNum: date.getDate(),
                dayStr: this.dayNames[date.getDay()]
            }
            days.push(dayObj);
            date.setDate(date.getDate() + 1);
        }
        this.addPrevDays(days)
        this.addNextDays(days)
        return days;
    }

    getIndex(dayName) {
        let dayNames = this.dayNames
        for (let i in dayNames) {
            if (dayNames[i] === dayName) {
                return i;
            }
        }
        return -1
    }

    addNextDays(days) {
        let dayName = days[days.length - 1].dayStr
        let dist = (this.dayNames.length - 1) - this.getIndex(dayName)
        this.pushNextDays(days, dist)

    }

    pushNextDays(days, dist) {
        dist = +dist
        while (dist) {
            dist--;
            days.push({ dayNum: '' })
        }
        this.days = days
    }

    addPrevDays(days) {
        let dayName = days[0].dayStr
        let dist = this.getIndex(dayName)
        let lastMonthDayNum = this.getLastMonthLastDay()
        this.pushFormerDays(days, dist, lastMonthDayNum)
    }

    pushFormerDays(days, dist, dayNum) {
        dist = +dist
        while (dist) {
            days.unshift({})
            dist--
        }
    }

    getLastMonthLastDay() {
        let month = this.month
        let year = this.year
        return new Date(year, month - 1, 0).getDate();

    }

    getMonthName() {
        let month = this.month
        var formattedMonth = moment().month(month).format('MMMM');
        return formattedMonth
    }

    getNextMonth() {
        let month = this.month
        let year = this.year
        if (month == 11) {
            month = 0
            year++
        } else {
            month++
        }
        return { month, year }
    }

    nextMonth() {
        let { month, year } = this.getNextMonth()
        this.month = month;
        this.year = year
        this.setState({})
    }

    getPrevMonth() {
        let month = this.month
        let year = this.year
        if (month === 0) {
            month = 11
            year--
        } else {
            month--
        }
        return { month, year }
    }

    prevMonth() {
        console.log('prevMonth')
        let { month, year } = this.getPrevMonth()
        this.month = month
        this.year = year
        this.setState({})
    }

    enterDaysHtml() {
        let dayNamesHtml = this.dayNames.map((dayName, index) => <div key={index}><h4>{dayName}</h4></div>)
        return dayNamesHtml
    }

    checkInDateValidation(checkIn) {
        let { checkOut } = this.state
        if (!checkIn || !checkOut) {
            return true
        }
        checkOut = this.props.formatDate(checkOut)
        checkIn = this.props.formatDate(checkIn)
        return moment(checkIn).isBefore(checkOut)
    }


    checkOutDateValidation(checkOut) {
        let { checkIn } = this.state
        if (!checkIn || !checkOut) {
            return true
        }
        checkIn = this.props.formatDate(checkIn)
        checkOut = this.props.formatDate(checkOut)
        return moment(checkOut).isAfter(checkIn)

    }
    updateDayLeft(fromDay) {
        this.fromDay = fromDay
        let checkIn = `${this.fromDay}/${this.month + 1}/${this.year}`
        if (this.checkInDateValidation(checkIn)) {
            this.setState({ checkIn })
            this.props.updateFromDate(checkIn)
        }
    }


    updateDayRight(toDay) {
        this.toDay = toDay
        let checkOut = `${this.toDay}/${this.month + 1}/${this.year}`
        if (this.checkOutDateValidation(checkOut)) {
            this.setState({ checkOut })
            this.props.updateToDate(checkOut)
        }
    }

    render() {
        let day = this.day
        let year = this.year
        let month = this.month
        let { takenDates, occupancy } = this.props
        let { checkIn, checkOut } = this.state
        return (
            <div className="avelablity">
                <div className="cal">
                    <div className="titleDate">
                        <div className="prevDate" onClick={this.prevMonth}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                        <div> <h3>{this.getMonthName() + ' ' + year}</h3></div>
                        <div className="nextDate" onClick={this.nextMonth}><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
                    </div>
                    <div className="days">{this.enterDaysHtml()}</div>
                    <div className="numberDates"></div>
                    <AvelablityDayList occupancy={occupancy} year={year} month={month} days={this.days} fromDay={this.fromDay} toDay={this.toDay} handleUpdateDayRight={this.updateDayRight} handleUpdateDayLeft={this.updateDayLeft} listDays={this.getDaysArray()} />
                </div>
                <div className="inputDates">
                    <div><input type="text" name="formDateAv" placeholder="checkIn" value={checkIn} /></div>
                    <div><input type="text" name="toDateAv" placeholder="checkOut" value={checkOut} /></div>
                </div>
            </div>
        )
    }

}