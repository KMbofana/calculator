import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PersonIcon from '@material-ui/icons/Person';


// Object of items
export const SidebarData = [
{
    title:"Exchange Rates",
    icon:<DashboardIcon />,
    link:"/Currency",
},
{
    title:"Capital Markets",
    icon:<BusinessIcon />,
    link:"/Currency",    
},
{
    title:"Send Money",
    icon:<GroupWorkIcon />,
    link:'/Currency',
},
// {
//     title:"",
//     icon:<PersonIcon />,
//     link:"/Employees",
// }
]

