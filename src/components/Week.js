import React, { useState, useEffect } from "react";
import CalendarEvent from "./CalendarEvent";
import { List, Grid } from "@mui/material";

export default function Week() {


    const [events, setEvents] = useState([]);



    //on component mount.. load data
    useEffect(() => {
        fetch("data/data.json")
            .then((result) => result.json())
            .then((data) => {
                //store data
                setEvents(data);
            });
    }, []);


    
    const filteredEvents = events.filter((event) => (
        event.row === 4
    ));


    //create list of events
    const eventsList = filteredEvents.map((event) => (
        <CalendarEvent key={event.id} event={event} />
    ));





    return (
        <div>
            <Grid>
                <h2>November</h2>
                <h4>Week View</h4>
                {/* <List>{eventsList}</List> */}
            </Grid>


            <Grid container spacing={2} columns={7}>
                <Grid item xs={1}>
                    <p>Sunday</p>
                    <List>
                        {eventsList.filter((event) => (event.props.event.day === 'Sunday'))}
                    </List>
                </Grid>
                <Grid item xs={1}>
                    <p>Monday</p>
                    <List>
                        {eventsList.filter((event) => (event.props.event.day === 'Monday'))}
                    </List>
                </Grid>
                <Grid item xs={1}>
                    <p>Tuesday</p>
                    <List>
                        {eventsList.filter((event) => (event.props.event.day === 'Tuesday'))}
                    </List>
                </Grid>
                <Grid item xs={1}>
                    <p>Wednesday</p>
                    <List>
                        {eventsList.filter((event) => (event.props.event.day === 'Wednesday'))}
                    </List>
                </Grid>
                <Grid item xs={1}>
                    <p>Thursday</p>
                    <List>
                        {eventsList.filter((event) => (event.props.event.day === 'Thursday'))}
                    </List>
                </Grid>
                <Grid item xs={1}>
                    <p>Friday</p>
                    <List>
                        {eventsList.filter((event) => (event.props.event.day === 'Friday'))}
                    </List>
                </Grid>
                <Grid item xs={1}>
                    <p>Saturday</p>
                    <List>
                        {eventsList.filter((event) => (event.props.event.day === 'Saturday'))}
                    </List>
                </Grid>







            </Grid>

        </div>
    );




}