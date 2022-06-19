import React from "react";
import { colors, fonts } from "styles/styleObj";
import { applyMediaQuery } from "styles/mediaQuery";
import { categories } from "constants/categories";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const CategoryMenu = () => {
    return (
        <StyledRoot>
            {categories.map((c, idx) => (
                <Btn
                    key={idx}
                    activeClassName="active"
                    exact={true}
                    to={c.name === "모두" ? "/" : `/category/${c.id}`}
                >
                    {c.name}
                </Btn>
            ))}
        </StyledRoot>
    );
};
export default CategoryMenu;

const StyledRoot = styled.div`
    width: 56rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 7rem;
    column-gap: 7rem;
    padding: 30px 0;

    ${applyMediaQuery("tablet")} {
        width: 40rem;
        grid-template-columns: repeat(2, 1fr);
    }
    ${applyMediaQuery("mobile")} {
        width: 30rem;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Btn = styled(NavLink)`
    width: 8rem;
    height: 8rem;
    margin: auto;
    line-height: 8rem;
    border-radius: 50%;
    background-color: ${colors.white.origin};
    text-align: center;
    color: ${colors.black.light_grey_3};
    font-weight: ${fonts.weight.bold};
    font-size: ${fonts.size.small};
    border: 0px solid;
    &:hover,
    &.active {
        background-color: ${colors.green.ewha};
        color: ${colors.white.origin};
    }
`;
