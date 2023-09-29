import React, { useEffect, useState } from 'react';

const ChapterComponent = () => {
  const [chapter, setChapter] = useState('');
  const randomNumber = Math.floor(Math.random() * 101);
  useEffect(() => {
    setChapter(randomNumber);
  }, [
  ]);

  return (
    <div className="chapterContainer">
      <p className="chapterTitle">CURRENT CHAPTER</p>
      <p className="chapter">
        chapter

        {chapter}
      </p>
      <div className="progress">UPDATE PROGRESS </div>
    </div>
  );
};

export default ChapterComponent;
