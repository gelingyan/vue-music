/**
 * Created by gelingyan on 2017/7/24.
 */
import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false, // 全屏
  playlist: [], // 播放列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放索引
}

export default state
