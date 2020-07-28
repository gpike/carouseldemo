import React, {useState, useEffect} from 'react';

/**
 *
 * @Category Components
 */
const withUnsplash = (ComponentToWrap, count) => {

    const fetchUrls = async (count) => {
        const URL = "https://source.unsplash.com/1600x900/?beach";
        const fetchedUrls = [];
        for(let i=0; i < count;i++) {
            const response = await fetch(URL);
            const imageUrl = response.url;
            fetchedUrls.push(imageUrl);
        }
        return fetchedUrls;
    }

    const WrappedComponent = (props) => {
        const urls = fetchUrls(count);
        const newProps = {
            urls: urls
        }

        return (
            <ComponentToWrap {...props} {... newProps} />
        ) ;
    };

    WrappedComponent.displayName = `withUnsplash_${ComponentToWrap.displayName || ComponentToWrap.name}`;
    return WrappedComponent;

};

export default withUnsplash;
