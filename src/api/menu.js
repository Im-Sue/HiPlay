import { axios } from '@/utils/request'

/**
 * 获取菜单数据
 * @returns Promise
 */
export function loadMenuData$ () {
  return axios({
    url: '/menu.json',
    method: 'get'
  })
}
