import React, { Component } from 'react';
// import Card from "./components/card/card";
// import Chart from "./components/chart/chart";
// import Country from "./components/country/country";
import { Card, Countryselect, Chart } from "./components";
import styles from "./App.module.css";
import { fetchdata } from './Api'

class App extends Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const data = await fetchdata();
        this.setState({ data: data })
        console.log(data);

    }
    handleCountryChange = async (country) => {
        const data = await fetchdata(country);
        this.setState({ data:data , country:country })
       
    }
    render() {
        const { data, country } = this.state;
        return (<div className={styles.container}>
<h2>Corona Tracking List</h2>
            <Card data={data} />
            <Countryselect handleCountryChange={this.handleCountryChange} />
            <Chart  data={data} country={country}/>


        </div>

        );

    }
}
export default App;