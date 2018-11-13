import store from '../../store/index'
/**
 * 通用请求
 * @param {args} args 对象参数包含action类型、url、method、params、data
 */
const requestFn = (args) => {
  console.log(store())
  return new Promise((resolve, reject) => {
    store().dispatch(args.action || 'action', {
      url: args.url || '',
      method: args.method || 'get',
      params: args.params || {},
      data: args.data || {},
      side: args.side || 'client',
      resolveFn: (state, res) => {
        resolve({ state, res })
      },
      rejectFn: (state, err) => {
        reject(err)
      }
    })
  }).catch(err => {
    return { state: null, res: err }
  })
}

const asyncRequest = (args, storeParam, side) => {
  return new Promise((resolve, reject) => {
    storeParam.dispatch(args.action || 'asyncAction', {
      url: args.url || '',
      method: args.method || 'get',
      params: args.params || {},
      data: args.data || {},
      side: side,
      resolveFn: (state, res) => {
        resolve({ state, res })
      },
      rejectFn: (state, err) => {
        reject(err)
      }
    })
  }).catch(err => {
    return { state: null, res: err }
  })
}

export {
  requestFn,
  asyncRequest
}
