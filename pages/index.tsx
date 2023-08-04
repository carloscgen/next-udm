import { EventList } from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummyData';
import type { NextPage } from 'next'

const Index: NextPage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents}/>
        </div>
    )
}

export default Index;