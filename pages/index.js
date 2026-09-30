import { getFeaturedEvents } from '../helpers/api-util';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import EventList from '../components/events/event-list';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

{
  /*function HomePage(props) {
  //const featuredEvents = getFeaturedEvents(props);
  const [featuredEvents, setFeaturedEvents] = useState(props.events);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    'https://udemy-nextjs-complete-default-rtdb.firebaseio.com/sales.json',
    fetcher,
  );

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !featuredEvents) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    const transformedEvents = [];
    if (data) {
      for (const key in data) {
        transformedEvents.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setFeaturedEvents(transformedEvents);
    }
  }, [data]);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}*/
}

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
  /*const response = await fetch(
    'https://udemy-nextjs-complete-default-rtdb.firebaseio.com/events.json',
  );
  const data = response.json();
  const transformedEvents = [];
  for (const key in data) {
    transformedEvents.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      location: data[key].location,
      date: data[key].date,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
    });
  }*/
  //const featuredData = data.filter((event) => event.isFeatured);
  //return { props: { events: data } };
  /*return {
    props: { events: transformedEvents.filter((event) => event.isFeatured) },
  };*/
}
