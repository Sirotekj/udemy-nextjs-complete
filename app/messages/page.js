import { unstable_noStore } from 'next/cache'; //old?
import { noStore } from 'next/cache'; //new?

import { getMessages } from '@/lib/messages';

import Messages from '@/components/messages';

//export const revalidate = 5; //must have name revalidate
//export const dynamic = 'force-dynamic'; // same as no-store in fetch, even with build
//export const dynamic = 'force-static'; // always cached

export default async function MessagesPage() {
  /*const response = await fetch('http://localhost:8080/messages', {
    cache: 'force-cache', //=cached - next:14; 'no-store' = not cahced - next:15
  });*/
  /*const response = await fetch('http://localhost:8080/messages', {
    next: {
      revalidate: 5, // cached for 5 seconds
    },
  });*/
  //unstable_noStore();

  /*
  const response = await fetch('http://localhost:8080/messages', {
    next: { tags: ['msg'] },
  });
  const messages = await response.json();
  */

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
