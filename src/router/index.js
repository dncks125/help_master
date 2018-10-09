import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import asd from '@/components/asd'
import newproject from '@/components/newproject'
import profile from '@/components/profile'
import write_post from '@/components/write_post'
import board from '@/components/board'
import read_post from '@/components/read_post'
import ManagementBoard from '@/components/ManagementBoard'
import notice from '@/components/notice'
import qna from '@/components/qna'
import suggestions from '@/components/suggestions'
import edit_post from '@/components/edit_post'
import gan from '@/components/gantt'
import cal from '@/components/cal'
import intro from '@/components/intro'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: intro
    },{
      path: '/asd',
      name: 'asd',
      component: asd
    },{
      path: '/newproject',
      name: 'newproject',
      component: newproject
    },{
      path: '/profile',
      name:'profile',
      component: profile
    },{
      path: '/board/:menu_no/write_post',
      name:'write_post',
      component: write_post
    },{
      path: '/board/:id',
      name:'board',
      component: board,

    },{
      path: '/board/:menu_no/read_post/:id',
      name:'read_post',
      component: read_post
    },
    {
      path: '/board/:menu_no/edit_post/:id',
      name:'edit_post',
      component: edit_post
    },
    {
      path: '/ManagementBoard',
      name:'ManagementBoard',
      component: ManagementBoard
    },{
      path: '/notice',
      name:'notice',
      component: notice
    },{
      path: '/qna',
      name:'qna',
      component: qna
    },
    {
      path: '/suggestions',
      name:'suggestions',
      component: suggestions
    },
    {
      path: '/gantt',
      name:'gantt',
      component: gan

    },
    {
      path: '/cal',
      name:'cal',
      component: cal

    }


  ]
})
