import React from "react";
import { Card, CardContent } from "@mui/material";
import Typography from '@mui/material/Typography';


export default function CalendarEvent(props) {

    return (







        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Date: {props.event.date}
                </Typography>
                <Typography variant="h5" component="div">
                    Event: {props.event.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Time: {props.event.time}
                    <br/>
                    Location: {props.event.location}
                </Typography>








                <Typography variant="body2">
                    Note: {props.event.note}
                </Typography>
            </CardContent>
        </Card>











    )

}









// <ListItem>
// {props.event.name}, {props.event.location}, {props.event.date}, {props.event.time}
// </ListItem>