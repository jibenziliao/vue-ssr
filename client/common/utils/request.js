import store from '../../store/index'
/**
 * 通用请求
 * @param {args} args 对象参数包含action类型、url、method、params、data
 */
export const requestFn = (args) => {
  return new Promise((resolve, reject) => {
    store().dispatch(args.action || 'action', {
      url: args.url || '',
      method: args.method || 'get',
      params: args.params || {},
      data: args.data || {},
      resolveFn: (state, res) => {
        resolve({ state: state, res: res })
      },
      rejectFn: (state, err) => {
        reject(err)
      }
    })
  }).catch(err => {
    return { state: null, res: err }
  })
}
