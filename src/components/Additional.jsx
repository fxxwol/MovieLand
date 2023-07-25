import { Link, useLocation } from 'react-router-dom';
import { Info, BtnList } from 'styles/Additional.styled';
import { useState } from 'react';

const Additional = () => {
  const location = useLocation();
  const [isShowed, setIsShowed] = useState(false);

  function handleClick() {
    setIsShowed(prev => !prev);
  }

  return (
    <>
      <h2>Additional info</h2>
      <BtnList>
        <li>
          {isShowed ? (
            <Info
              component={Link}
              to={``}
              variant="outlined"
              color="secondary"
              className={location.pathname.includes('cast') ? 'active' : ''}
              onClick={handleClick}
            >
              Cast
            </Info>
          ) : (
            <Info
              component={Link}
              to={`cast`}
              variant="outlined"
              color="secondary"
              className={location.pathname.includes('cast') ? 'active' : ''}
              onClick={handleClick}
            >
              Cast
            </Info>
          )}
        </li>
        <li>
          {isShowed ? (
            <Info
              component={Link}
              to={``}
              variant="outlined"
              color="secondary"
              className={location.pathname.includes('reviews') ? 'active' : ''}
              onClick={handleClick}
            >
              Reviews
            </Info>
          ) : (
            <Info
              component={Link}
              to={`reviews`}
              variant="outlined"
              color="secondary"
              className={location.pathname.includes('reviews') ? 'active' : ''}
              onClick={handleClick}
            >
              Reviews
            </Info>
          )}
        </li>
      </BtnList>
    </>
  );
};

export default Additional;
