import React from 'react';
const UserContext = React.createContext({
    name: 'Angel',
    image: 'https://qph.fs.quoracdn.net/main-raw-133532646-cuvvxaqssfswoftefsrernglbshzowfp.jpeg'
});
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
export default UserContext;
