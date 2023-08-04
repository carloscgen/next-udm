import React from 'react'
import { EventItem, IEventItem } from './EventItem';

interface IEventItems {
  items: IEventItem[]
}

export const EventList: React.FunctionComponent<IEventItems> = ({ items }) => {
  return (
    <ul>
      {items.map((event: IEventItem) => (<EventItem key={event.id} date={event.date} location={event.location} image={event.image} title={event.title} id={event.id} />))}
    </ul>
  )
}
