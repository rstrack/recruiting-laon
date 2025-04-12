import dynamic from 'next/dynamic';

const TrailerModalClient = dynamic(() => import('./TrailerModalClient'), {
    ssr: false,
});

export default TrailerModalClient;
