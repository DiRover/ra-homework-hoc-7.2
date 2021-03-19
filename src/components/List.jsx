import React from 'react';
import Video from './Video';
import Article from './Article';
import sort from './Wrapper';
import { v4 as uuidv4 } from 'uuid';

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
            const VideoWrapper = sort(Video);
                return (
                    <VideoWrapper {...item} key = { uuidv4()}/>
                );

            case 'article':
            const ArticleWrapper = sort(Article);
                return (
                    <ArticleWrapper {...item} key = { uuidv4()}/>
                );
        }
    });
};
