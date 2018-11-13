// 普通请求
export const REQUEST_BEGIN = 'REQUEST_BEGIN'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_FAILED = 'REQUEST_FAILED'
// 页面跳转时请求，切换显示加载占位图状态
export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
// 从列表页前进时，需保存列表滚动高度(每个列表页的滚动容器是自定义的，因此不能用window的滚动高度代替)
export const SAVE_SCROLL = 'SAVE_SCROLL'

// home
export const GET_ENTRY_SUCCESS = 'GET_ENTRY_SUCCESS'
export const GET_ENTRY_NEXT_SUCCESS = 'GET_ENTRY_NEXT_SUCCESS'
