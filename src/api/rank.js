/**
 * Created by gelingyan on 2017/8/7.
 */

import jsonp from 'common/js/jsonp'
import {commonparams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonparams, {
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonparams, {
//    uin: 0, // 登录账号，可以不传
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid
  })

  return jsonp(url, data, options)
}
