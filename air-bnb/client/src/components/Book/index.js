import React from "react";
import classNames from 'classnames'
import "./Book.css";
import Calendar from 'react-calendar';
import dateFormat from 'dateformat';
import moment from 'moment'
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import axios from 'axios'
import Avelablity from '../Avelablity';


import 'react-datepicker/dist/react-datepicker.css';
import 'react-select/dist/react-select.css';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.price = props.price
        this.state = {
            checkInDate: '',
            checkOutDate: '',
            guestsNum: 1,
            cl: 'fa fa-2x fa-heart-o',
            bookStatus: '',
            takenDates: []
        }

        this.classFlag = false;
        this.onChangeIn = this.onChangeIn.bind(this)
        this.onChangeOut = this.onChangeOut.bind(this)

        this.bookMe = this.bookMe.bind(this)
        this.updateGuests = this.updateGuests.bind(this)
        this.toggleHeart = this.toggleHeart.bind(this)

        this.updateFromDate = this.updateFromDate.bind(this)
        this.updateToDate = this.updateToDate.bind(this)

        this.updateGusets = this.updateGusets.bind(this)
        this.formatDate = this.formatDate.bind(this)

    }

    updateGusets({ target }) {
        let guestsNum = target.value
        this.setState({ guestsNum })
    }

    updateFromDate(checkInDate) {
        this.setState({ checkInDate })
    }

    updateToDate(checkOutDate) {
        this.setState({ checkOutDate })

    }

    toggleHeart({ target }) {
        let cl = classNames({
            'fa': true,
            'fa-2x': true,
            'fa-heart': !this.classFlag,
            'fa-heart-o': this.classFlag
        })
        this.classFlag = !this.classFlag
        this.setState({ cl: cl })
    }

    updateGuests(val) {
        let value = val || ''
        this.setState({ guests: value.label })
    }

    formatDate(dateToConvert) {
        let dateArr = dateToConvert.split('/')
        dateArr = dateArr.reverse()
        return dateArr.join('-')
    }

    async bookFunc() {
        let { checkInDate, checkOutDate, guestsNum } = this.state
        checkInDate = this.formatDate(checkInDate)
        checkOutDate = this.formatDate(checkOutDate)
        let bookData = {
            checkIn: checkInDate,
            checkOut: checkOutDate,
            guestsNum: guestsNum,

        }
        let response = await axios.post(`/api/homes/book/${this.props.homeId}`, bookData)
        return response.data
    }
    
    updateAvalDate() {
        let { checkInDate, checkOutDate, takenDates } = this.state
        takenDates.push({ checkInDate, checkOutDate })
        this.setState({ takenDates })
    }

    bookMe() {
        let { checkInDate, checkOutDate, guestsNum } = this.state
        console.log('BOOKING DATES  :', checkInDate, checkOutDate, guestsNum, this.props.homeId)
        let booking = this.bookFunc()
        let bookStatus = (booking) ? 'book success' : 'fail book'
        this.setState({ bookStatus })
        if (booking) {
            this.updateAvalDate()
        }
    }
    onChangeIn(date) {
        this.setState({ checkInDate: date });
    }
    onChangeOut(date) {
        this.setState({ checkOutDate: date });
    }

    render() {
        const { checkInDate, checkOutDate, guests, cl, bookStatus, takenDates } = { ...this.state }
        let occupancy = this.props.occupancy
        return (
            <div className="book">
                <div className="bookTitle">
                    <div>
                        <h3>₪{this.price} per night</h3>
                    </div>
                    <div className="heart" >
                        <i className={cl} aria-hidden="true" onClick={this.toggleHeart}></i>
                    </div>
                </div>
                <Avelablity formatDate={this.formatDate} occupancy={occupancy} takenDates={takenDates} updateFromDate={this.updateFromDate} updateToDate={this.updateToDate} />
                <div className="guest">
                    <div>guests:</div>
                    <select className="guestSelection" value={this.guestsNum} onChange={this.updateGusets} >
                        <option value="1">1 guests</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                    </select>
                </div>
                <div>
                    <div className="bookBtb"><button onClick={this.bookMe}><span>Request to Book</span></button></div>
                </div>
                <div className="noCharge"><span>You won’t be charged yet</span></div>
                <div>{bookStatus}</div>
            </div>
        );
    }
}

export default Book;
