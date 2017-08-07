/**
 * Created by gelingyan on 2017/7/24.
 */
import {playMode} from 'common/js/config'
import {loadSearch, loadPlay} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false, // 全屏
  playlist: [], // 播放列表
  sequenceList: [], // 原始列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放索引
  disc: {}, // 歌单
  topList: {},
  searchHistory: loadSearch(), // 历史记录
  playHistory: loadPlay() // 播放历史记录
}

export default state
