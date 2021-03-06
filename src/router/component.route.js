const _import = require('./_import_' + process.env.NODE_ENV)
const title = '组件'

let componentEditor = [
  {
    name: 'Editor',
    children: [
      {name: 'WangEditor'},
      {name: 'QuillEditor'},
      {name: 'MarkdownEditor'},
      // {name: 'MavonEditor'},
      {name: 'UEditor'}]
  },
  {name: 'EditorTab'}
]
let componentChart = [
  {name: 'Echarts'},
  {name: 'IEcharts'},
  {name: 'G2'}
]

export default [
  {
    path: '/component',
    name: 'tab.component',
    component: _import('Layout'),
    redirect: '/component/dashboard',
    meta: {title, icon: 'el-icon-goods'},
    children: [
      {
        path: '/component/dashboard',
        name: 'Dashboard',
        component: _import('component-demo/dashboard/index'),
        meta: {title, icon: 'el-icon-printer'}
      },
      {
        path: '/component/editor',
        name: 'Editor',
        component: _import('Content'),
        redirect: '/component/editor/wangEditor',
        meta: {title, icon: 'el-icon-menu', menus: componentEditor},
        children: [
          {path: 'wangEditor', component: _import('component-demo/editor/wangEditor'), name: 'WangEditor'},
          {path: 'quillEditor', component: _import('component-demo/editor/quillEditor'), name: 'QuillEditor'},
          {path: 'markdownEditor', component: _import('component-demo/editor/markdownEditor'), name: 'MarkdownEditor'},
          {path: 'UEditor', component: _import('component-demo/editor/UEditor'), name: 'UEditor'},
          {path: 'mavonEditor', component: _import('component-demo/editor/mavonEditor'), name: 'MavonEditor'},
          {path: 'editorTab', component: _import('component-demo/editor/EditorTab'), name: 'EditorTab'}
        ]
      },
      {
        path: '/component/chart',
        name: 'Chart',
        component: _import('Content'),
        redirect: '/component/chart/echarts',
        meta: {title, icon: 'el-icon-goods', menus: componentChart},
        children: [
          {path: 'echarts', component: _import('component-demo/chart/echarts'), name: 'Echarts'},
          {path: 'IEcharts', component: _import('component-demo/chart/IEcharts'), name: 'IEcharts'},
          {path: 'g2', component: _import('component-demo/chart/g2'), name: 'G2'}
        ]
      },
      {
        path: '/component/map',
        name: 'Map',
        component: _import('component-demo/map/index'),
        meta: {title, icon: 'el-icon-menu'}
      },
      {
        path: '/component/clipboard',
        name: 'Clipboard',
        component: _import('component-demo/clipboard/index'),
        meta: {title, icon: 'el-icon-printer'}
      },
      {
        path: '/component/mixin',
        name: 'Mixin',
        component: _import('component-demo/mixin/index'),
        meta: {title, icon: 'el-icon-goods'}
      }
    ]
  }
]
