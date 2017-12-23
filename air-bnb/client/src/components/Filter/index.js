import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment'
import './Filter.css'

const HOST ='ec2-18-217-200-204.us-east-2.compute.amazonaws.com';
class Filter extends Component {
    constructor(props) {
        super()
        this.state = { fromPrice: 0, toPrice: 100000, fromDate: '', toDate: '' }
        this.updateToDate = this.updateToDate.bind(this)
        this.updateFromDate = this.updateFromDate.bind(this)

        this.filterCity = this.filterCity.bind(this)
        this.updateToPrice = this.updateToPrice.bind(this)
        this.updateFromPrice = this.updateFromPrice.bind(this)
        this.filterByPrice = this.filterByPrice.bind(this)
        this.filterByDate = this.filterByDate.bind(this)
    }

    updateFromPrice({ target }) {
        this.setState({ fromPrice: parseInt(target.value) || 0 })
        this.filterByPrice()
    }

    updateToPrice({ target }) {
        this.setState({ toPrice: parseInt(target.value) || 1000000 })
        this.filterByPrice()
    }

    updateFromDate(fromDate) {
        this.setState({ fromDate })
    }

    updateToDate(toDate) {
        this.setState({ toDate })
    }

    filterCity({ target }) {
        let { originalList, updateList } = this.props
        let txt = target.value
        let filterData = originalList.filter(home => home['address'][target.name].toLowerCase().includes(txt))
        updateList(filterData)
    }

    filterByPrice() {
        let { originalList, updateList } = this.props
        let { fromPrice, toPrice } = this.state
        let filterData = originalList.filter(home => home['price'] >= fromPrice && home['price'] <= toPrice)
        updateList(filterData)
    }

    filterByDate() {
        let { originalList, updateList } = this.props
        let filterData = this.getFilteredList()
        updateList(filterData)
    }

    getFilteredList() {
        let { fromDate, toDate } = this.state
        let homeList = []
        let { originalList } = this.props
        if (fromDate && toDate) {
            if (fromDate.isBefore(toDate)) {
                for (let home of originalList) {
                    let homeFree = this.checkHomeFree(home)
                    if (homeFree) {
                        homeList.push(home)
                    }
                }
            } else {
                homeList = []
            }
        }
        return homeList
    }

    checkHomeFree(home) {

        let { fromDate, toDate } = this.state
        let occupancy = home.occupancy
        for (let date of occupancy) {
            if (!moment(fromDate).isBetween(date.fromDate, date.toDate, 'day', []) || !moment(toDate).isBetween(date.fromDate, date.toDate, 'day', [])) {

                return false
            }
        }
        return true
    }



    convertStrDate(date) {
        let dateArr = this.formatDate(date)
        return `${dateArr[0]}-${dateArr[1]}-${dateArr[2]}`
    }


    formatDate(dateToConvert) {
        let dateArr = dateToConvert.split('-')
        return dateArr.reverse()

    }



    render() {
        let { fromDate, toDate } = this.state
        return (
            <div className="mainFilter">
                {window.location.href == '${HOST}/' &&
                    <div className="filter">
                        <div><input type="text" placeholder="city" name='city' onChange={this.filterCity} /></div>
                        <div><input type="text" placeholder="from price" name='fromPrice' onChange={this.updateFromPrice} /></div>
                        <div><input type="text" placeholder="to price" name='toPrice' onChange={this.updateToPrice} /></div>
                        <DatePicker className="filterDatePicker"
                            selected={fromDate}
                            onChange={this.updateFromDate}
                            placeholderText="from date"
                        />
                        <DatePicker className="filterDatePicker"
                            selected={toDate}
                            onChange={this.updateToDate}
                            placeholderText="to date"
                        />
                        <button onClick={this.filterByDate}>apply</button>
                    </div>
                }
                {window.location.href.includes(`${HOST}/home`) &&
                    <div className="searchBar">
                        <input type="text" name="search" placeholder="search" />
                    </div>
                }
            </div>
        )

    }
}

export default Filter

 