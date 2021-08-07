import Mock from 'mockjs'
import { getWindDirection } from './windDirectionMock'

Mock.mock(/\/api\/getWindDirection/, 'get', getWindDirection)
