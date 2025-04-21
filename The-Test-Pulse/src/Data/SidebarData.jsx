import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import ForumIcon from '@mui/icons-material/Forum';
import { FaSwatchbook } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";


import AssessmentIcon from '@mui/icons-material/Assessment';
export const SidebarData=[
    {
        title:"Dashboard",
        path:"/dashboard",
        icon:<SpaceDashboardIcon/>
    },
    
    {
        title:"Quizzes",
        path:"/dashboard/quizzes",
        icon:<AssessmentIcon/>
    },
    {
        title:"Test Series",
        path:"/dashboard/test-series",
        icon:<FaSwatchbook/>
    },
   
    {
        title:"Analytics",
        path:"/dashboard/analytics",
        icon:<PieChartIcon/>
    },

    {
        title:"Inbox",
        path:"/dashboard/inbox",
        icon:<ForumIcon/>    
    },
    {
        title:"Setting",
        path:"/dashboard/settings",
        icon:<IoSettings fontSize={24}/>
    },
]