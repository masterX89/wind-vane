import Mock from 'mockjs'

const Random = Mock.Random

export const getWindDirection = () => {
  return {
    windDirection: Random.integer(),
    status: 200,
    message: '查询成功',
  }
}
