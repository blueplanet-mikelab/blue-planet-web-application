import React, { Component } from 'react'
import { getThreadList } from '../../actions/threadActions'
import Filter from '../../components/thread/filter';
import Searchmini from '../../components/home/minisearch';

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thread: []
        }
    }

    componentDidMount() {
        getThreadList().then(res =>
            this.setState({
                thread: res
            })
        )
    }

    threadList() {
        return this.state.thread.map(function(currentThread, i) {
            return <div key={i}>{currentThread.title}</div>
        })
    }

    render() {
        return (
            <div>
                <Searchmini/>
                {/* <Filter/> */}
                {this.threadList()}
            </div>
        )
    }

}

export default Forum