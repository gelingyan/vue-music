/**
 * Created by gelingyan on 2017/7/21.
 */
import jsonp from 'common/js/jsonp'
import {commonparams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonparams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    g_tk: 5381
  })

  return jsonp(url, data, options)
}
