import { useEffect, useState } from 'react';
import { ColorMessage } from './components/ColorMessage';

export const App = () => {
  console.log('--App--');
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);

  const onClickCount = () => {
    setNum(num + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 className="menu">aaaa</h1>
      <ColorMessage color="blue">あいうえお</ColorMessage>
      <ColorMessage color="green">あいうえおkaki</ColorMessage>
      <button onClick={onClickCount}>counter</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>testtest</p>}
    </>
  );
};
