import {
    LayoutDashboard,
    LineChart,
    Users,
    StretchHorizontal,
    Settings,
    HelpCircle
} from "lucide-react";

const mainLinks = [
    {
        id: 1,
        label: "OverView",
        icon: <LayoutDashboard />
    },
    {
        id: 2,
        label: "Analytics",
        icon: <LineChart />
    },
    {
        id: 3,
        label: "Audience",
        icon: <Users />
    },
    {
        id: 4,
        label: "Categories",
        icon: <StretchHorizontal />
    }
];

const additionalLinks = [
    {
        id: 5,
        label: "Settings",
        icon: <Settings />
    },
    {
        id: 6,
        label: "Help",
        icon: <HelpCircle />
    }
];

export { mainLinks, additionalLinks };
