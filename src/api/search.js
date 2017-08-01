/**
 * Created by gelingyan on 2017/8/1.
 */
import jsonp from 'common/js/jsonp'
import {commonparams, options} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonparams, {
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
