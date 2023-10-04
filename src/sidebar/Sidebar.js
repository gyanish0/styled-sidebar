import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLast, ChevronFirst } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { additionalLinks, mainLinks } from "../Linkes";

// Styled Components
const SidebarWrapper = styled.aside`
  height: 100vh;
  width: max-content;
  padding: 1rem;
  background-color: hsl(217, 38%, 11%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ::before, ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
}
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all 0.3s;

  ${(props) => (props.expanded ? "width: 100%;" : "width: auto;")}
`;

const LogoImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const LogoTitle = styled.h2`
  color: white;
  font-size: inherit;
  font-weight: inherit;
`;

const ToggleButton = styled.button`
  padding: 0.375rem;
  color: white;
  border-radius: 0.375rem;
  background-color: #acacac;
  border: none;
  &:hover {
    background-color: #cfcfcf;
  }
`;

const SidebarList = styled.ul`
  padding-top: 0.75rem;
  border-bottom: 1px solid hsla(217, 20%, 45%, 0.3);
`;

// Main Sidebar Component
function Sidebar() {
    const [expanded, setExpanded] = useState(true);
    const [active, setActive] = useState(mainLinks[0].id);

    return (
        <SidebarWrapper>
            <SidebarContent>
                <LogoContainer expanded={expanded}>
                    <div
                        style={{
                            display: expanded ? "flex" : "none",
                            alignItems: "center",
                            gap: "0.75rem",
                        }}
                    >
                        <LogoImage
                            src="https://autonomously-ui.lusites.xyz/static/media/4.2a921800.png"
                            alt="img"
                        />
                        <LogoTitle>Untitled UI</LogoTitle>
                    </div>
                    <ToggleButton onClick={() => setExpanded((prev) => !prev)}>
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </ToggleButton>
                </LogoContainer>
                <SidebarList>
                    {mainLinks.map((link) => (
                        <SidebarItem
                            key={link.id}
                            link={link}
                            expanded={expanded}
                            active={active}
                            setActive={setActive}
                        />
                    ))}
                </SidebarList>
                <ul>
                    {additionalLinks.map((link) => (
                        <SidebarItem
                            key={link.id}
                            link={link}
                            expanded={expanded}
                            active={active}
                            setActive={setActive}
                        />
                    ))}
                </ul>
            </SidebarContent>
        </SidebarWrapper>
    );
}

export default Sidebar;
