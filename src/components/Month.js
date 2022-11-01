import React, { useState, useEffect } from "react";
import CalendarEvent from "./CalendarEvent";
import { List, Grid, Card, Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from "@mui/material";


export default function Month() {


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
        event.row == 4
    ));


    //create our inventory list
    const eventsList = filteredEvents.map((event) => (
        <CalendarEvent key={event.id} event={event} />
    ));






    function createData(week, sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
        return { week, sunday, monday, tuesday, wednesday, thursday, friday, saturday };
    }

    const rows = [
        createData(1, '', '', '1', '2', '3', '4', '5'),
        createData(2, '6', '7', '8', '9', '10', '11', '12'),
        createData(3, '13', '14', '15', '16', '17', '18', '19'),
        createData(
            4, 
            eventsList.filter((event) => (event.props.event.day == 'Sunday')),
            eventsList.filter((event) => (event.props.event.day == 'Monday')), 
            eventsList.filter((event) => (event.props.event.day == 'Tuesday')), 
            eventsList.filter((event) => (event.props.event.day == 'Wednesday')), 
            eventsList.filter((event) => (event.props.event.day == 'Thursday')), 
            eventsList.filter((event) => (event.props.event.day == 'Friday')), 
            eventsList.filter((event) => (event.props.event.day == 'Saturday'))
            ),
        createData(5, '27', '28', '29', '30', '', '', '')
    ];










    return (
        <div>
            <Grid>
                <h2>November</h2>
                <h4>Month View</h4>
                {/* <List>{eventsList}</List> */}
            </Grid>


            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sunday</TableCell>
                            <TableCell align="right">Monday</TableCell>
                            <TableCell align="right">Tuesday</TableCell>
                            <TableCell align="right">Wednesday</TableCell>
                            <TableCell align="right">Thursday</TableCell>
                            <TableCell align="right">Friday</TableCell>
                            <TableCell align="right">Saturday</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.week}
                            >
                                <TableCell component="th" scope="row">
                                    {row.sunday}
                                </TableCell>
                                <TableCell align="right">{row.monday}</TableCell>
                                <TableCell align="right">{row.tuesday}</TableCell>
                                <TableCell align="right">{row.wednesday}</TableCell>
                                <TableCell align="right">{row.thursday}</TableCell>
                                <TableCell align="right">{row.friday}</TableCell>
                                <TableCell align="right">{row.saturday}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );




}