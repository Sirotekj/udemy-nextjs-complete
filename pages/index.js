import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
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
