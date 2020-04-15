import React from 'react';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import cx from 'classnames';
import style from './card.module.css';
import Countup from 'react-countup';

const card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    //console.log(props)
    if (!confirmed) {
        return 'loading...'
    }
    return (
        <div className={style.container}>
            <Grid container spacing={4} justify="center">

                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <Countup start={0} end={confirmed.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of active cases</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <Countup start={0} end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of Recovered cases</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <Countup start={0} end={deaths.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>                        <Typography variant="body2" >Number of Death cases</Typography>
                    </CardContent>

                </Grid>

            </Grid>

        </div>)
}
export default card;