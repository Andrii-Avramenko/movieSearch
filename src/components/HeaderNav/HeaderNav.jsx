import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackBtn, StyledLink, StyledNav } from "./HeaderNav.styled";
import { TiArrowBackOutline } from "react-icons/ti";

export const HeaderNav = memo(() => {
  const [backLink, setBackLink] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    if (state) {
      setBackLink(state.from);
      return;
    }
    setBackLink(null);
  }, [state]);

  return (
    <>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        {backLink && (
          <BackBtn to={backLink ? backLink : '/movieSearch'}>
            <button type="button" inert>
              <TiArrowBackOutline />
              Go Back
            </button>
          </BackBtn>
        )}
      </StyledNav>
    </>
  );
});
