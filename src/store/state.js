import {playModel} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playModel.sequence,
  currentIndex: -1
}

export default state