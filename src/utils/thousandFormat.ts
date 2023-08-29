/**
 * 数值的千位分隔
 * 空值将返回0
 * 非空数值如12300，将分隔为12,300
 */

// 第一种写法
export const thousandNumSeparate = (num?: number): 0 | string => {
    if(!num) return 0
    return (num + '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, function (_, $1) {
            return $1 + ","
        })
}

// 第二种写法
export const thousandFormat = (num?: number): 0 | string => {
    if (!num) return 0
    return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}