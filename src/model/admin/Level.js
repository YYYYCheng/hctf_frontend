import Model from '@/model/model'

class Level extends Model{
  /**
   * 获得 Level 信息
   * @param levelId
   * @returns {Promise}
   */
  getLevelInfo(levelId){
    return new Promise(async (resolve, reject) => {
      try{
        let levelInfo = await this.request("GET", "/Level/info", {
          "levelId": levelId
        });
        resolve(levelInfo);
      }
      catch (e){
        reject(e);
      }
    })
  }

  /**
   * 设置 Level Name
   * @param levelId
   * @param levelName
   * @returns {Promise}
   */
  setLevelName(levelId, levelName){
    return new Promise(async (resolve, reject) => {
      try{
        let level = await this.request("POST", "/Level/setName", {
          levelId: levelId,
          levelName: levelName
        }, {
          needAuth: true
        });
        resolve(level);
      }
      catch (e){
        reject(e);
      }
    })
  }

  /**
   * 设置 Level 发布时间
   * @param levelId
   * @param releaseTime
   * @returns {Promise}
   */
  setReleaseTime(levelId, releaseTime){
    return new Promise(async (resolve, reject) => {
      let time = new Date(releaseTime);
      let timeString = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
      try{
        let level = await this.request("POST", "/Level/setReleaseTime", {
          levelId: levelId,
          releaseTime: timeString
        }, {
          needAuth: true
        });
        resolve(level);
      }
      catch (e){
        reject(e);
      }
    })
  }
}

export default Level;