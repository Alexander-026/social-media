import React from 'react';
import Stories from './Stories';
import AddPost from './AddPost';
import Feed from './Feed/Feed';

const CenterSection = () => {
    return (
    <section className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
            <Stories/>
            <AddPost/>
            <Feed/>
        </div>
      </section>
    );
};

export default CenterSection;