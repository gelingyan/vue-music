// 构造Singer类
export default class Singer {
  constructor({id, name}) { // 构造器
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
