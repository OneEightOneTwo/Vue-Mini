// import login from './view/login'
import first from './view/First'
import Tantan from './view/Tantan'
import mine from './view/Mine'
import sign from './view/Sign'
import reg from './view/Reg'
import discover from './view/discover'
import fujing from './view/fujing'
export const routes = [
    {path:'/',name:'first',component:first},
    {path:'/Tantan',name:'Tantan',component:Tantan},
    { path: '/mine', component: mine },
    { path: '/sign', component: sign, name: 'signIn' },
    { path: '/reg', component: reg, name: 'regIn' },
    { path: '/discover', component: discover, name: 'discover' },
    { path: '/fujing', component: fujing, name: 'fujing' },
  ]
