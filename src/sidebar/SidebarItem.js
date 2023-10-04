import React from "react";
import styled from "styled-components";

// Styled Components
const SidebarItemWrapper = styled.li`
  display: flex;
  padding: 0.75rem;
  margin: 0.25rem 0;
  align-items: center;
  gap: 0.75rem;
  color: white;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s;
  width: ${(props) => (props.expanded ? "14rem" : "auto")};

  &:hover {
    background-color: #acacac;
    transition: all 0.3s;
  }

  ${(props) =>
        props.active === props.link.id
            ? `
    background-color: indigo;
    &:hover {
      background-color: indigo;
    }
  `
            : ""}
`;

const SidebarItemLabel = styled.span`
  display: ${(props) => (props.expanded ? "block" : "none")};
  transition: all 0.3s;
`;

function SidebarItem({ link, expanded, active, setActive }) {
    return (
        <SidebarItemWrapper
            expanded={expanded}
            active={active}
            link={link}
            onClick={() => setActive(link.id)}
        >
            {link.icon}
            <SidebarItemLabel expanded={expanded}>{link.label}</SidebarItemLabel>
        </SidebarItemWrapper>
    );
}

export default SidebarItem;
