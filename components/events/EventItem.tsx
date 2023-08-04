import Link from 'next/link'
import React from 'react'
// import classes from './event.module.scss' // in case want to use modules
import { Box } from '@mui/material'

export interface IEventItem {
    title: string
    image: string
    location: string
    date: any
    id: string
}

export const EventItem: React.FunctionComponent<IEventItem> = ({ date, location, image, title, id }) => {
    const humanReadableDate = new Date(date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedLocation = location.replace(', ', '\n')

    return (
        // in case want to use modules
        // <li className={classes.item}> 
        <li>
            <img src={'/' + `${image}`} alt={title} />
            <div>
                <Box
                    sx={{
                        backgroundColor: 'red'
                    }}
                >
                    <h2>TITLE</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <p>{formattedLocation}</p>
                    </div>
                </Box>
                <div>
                    <Link href={`/events/${id}`}>Explore Event</Link>
                </div>
            </div>
        </li>

    )
}
